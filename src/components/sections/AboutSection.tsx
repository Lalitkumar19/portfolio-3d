import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with modern best practices and design patterns.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending technical expertise with creative vision to build stunning user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams, mentoring developers, and delivering results.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-blue/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground">
              I'm a passionate full-stack developer with a love for creating immersive digital experiences. 
              With 4+ years of experience in modern web technologies, I specialize in building scalable 
              applications that combine cutting-edge 3D graphics with robust backend systems.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me exploring the latest in WebGL, contributing to open-source 
              projects, or sharing knowledge with the developer community through talks and mentoring.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover:bg-secondary/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4 group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '4+', label: 'Years Experience' },
            { number: '100k+', label: 'Lines of Code' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}