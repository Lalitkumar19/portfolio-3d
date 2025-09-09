import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

function LaptopModel() {
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={laptopRef}>
        {/* Laptop Base */}
        <Box args={[2, 0.1, 1.5]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Laptop Screen */}
        <Box args={[2, 1.2, 0.05]} position={[0, 0.1, -0.7]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial color="#0d1421" emissive="#00ffff" emissiveIntensity={0.3} />
        </Box>
        
        {/* Screen Glow */}
        <Box args={[1.8, 1, 0.01]} position={[0, 0.15, -0.68]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff" 
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </Box>
      </group>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={1000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ffff"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export function FloatingLaptop() {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ff00ff" />
        
        <ParticleField />
        <LaptopModel />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}