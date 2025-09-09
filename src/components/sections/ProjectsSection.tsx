import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: '3D Portfolio Website',
      description: 'An immersive 3D portfolio built with React Three Fiber, featuring interactive animations and modern design.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI with natural language processing and smart responses.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Socket.io', 'OpenAI', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data analysis with real-time charts and filtering capabilities.',
      image: '/api/placeholder/400/250',
      tech: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in modern web development and 3D technologies
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className={`perspective ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="glass-card h-full group overflow-hidden transform-3d">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🚀</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex gap-2">
                      <Button size="sm" variant="neon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="glass" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs glass-card hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" variant="neon">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}