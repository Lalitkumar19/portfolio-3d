import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'React', position: [2, 1, 0] as [number, number, number], color: '#61dafb' },
  { name: 'TypeScript', position: [-2, 1, 1] as [number, number, number], color: '#3178c6' },
  { name: 'Node.js', position: [1, -2, 1] as [number, number, number], color: '#68a063' },
  { name: 'Python', position: [-1, -1, -2] as [number, number, number], color: '#3776ab' },
  { name: 'Three.js', position: [2, 0, -1] as [number, number, number], color: '#ffffff' },
  { name: 'Docker', position: [-2, 0, -1] as [number, number, number], color: '#2496ed' },
  { name: 'AWS', position: [0, 2, 1] as [number, number, number], color: '#ff9900' },
  { name: 'GraphQL', position: [1, 1, 2] as [number, number, number], color: '#e10098' },
  { name: 'MongoDB', position: [-1, 2, 0] as [number, number, number], color: '#47a248' },
  { name: 'Next.js', position: [0, -2, -1] as [number, number, number], color: '#ffffff' },
];

function SkillOrb({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + index;
      meshRef.current.position.x = skill.position[0] + Math.sin(t * 0.5) * 0.3;
      meshRef.current.position.y = skill.position[1] + Math.cos(t * 0.7) * 0.3;
      meshRef.current.position.z = skill.position[2] + Math.sin(t * 0.3) * 0.3;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        <mesh
          ref={meshRef}
          position={skill.position}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.5 : 0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        <Text
          position={[skill.position[0], skill.position[1] - 0.6, skill.position[2]]}
          fontSize={0.2}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {skills.map((skill, i) => 
        skills.slice(i + 1).map((otherSkill, j) => {
          const distance = Math.sqrt(
            (skill.position[0] - otherSkill.position[0]) ** 2 +
            (skill.position[1] - otherSkill.position[1]) ** 2 +
            (skill.position[2] - otherSkill.position[2]) ** 2
          );

          if (distance < 3) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(...skill.position),
              new THREE.Vector3(...otherSkill.position)
            ]);

            return (
              <primitive key={`${i}-${j}`} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#00ffff", transparent: true, opacity: 0.3 }))} />
            );
          }
          return null;
        })
      )}
    </group>
  );
}

export function SkillSphere() {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00ffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />

        {skills.map((skill, index) => (
          <SkillOrb key={skill.name} skill={skill} index={index} />
        ))}
        
        <ConnectionLines />

        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
}