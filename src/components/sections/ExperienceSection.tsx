import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'TechCorp Innovation',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of cutting-edge web applications using React, Node.js, and AWS. Implemented 3D visualizations and improved performance by 40%.',
      achievements: [
        'Architected microservices handling 1M+ daily requests',
        'Mentored 5+ junior developers',
        'Reduced deployment time by 60% with CI/CD optimization',
      ],
    },
    {
      company: 'Digital Solutions Ltd',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Developed scalable web applications and APIs, focusing on performance optimization and user experience improvements.',
      achievements: [
        'Built responsive web apps serving 100k+ users',
        'Integrated third-party APIs and payment systems',
        'Improved application load times by 50%',
      ],
    },
    {
      company: 'StartupVenture',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Created modern, interactive user interfaces using React and TypeScript. Collaborated with design teams to deliver pixel-perfect implementations.',
      achievements: [
        'Developed component library used across 5+ projects',
        'Implemented real-time features with WebSocket',
        'Achieved 98% cross-browser compatibility',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      icon: '⚛️',
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      year: '2021',
      icon: '🏆',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-50" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow z-10" />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-5/12`}>
                  <motion.div
                    className="glass-card p-6 hover:bg-secondary/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2 }}
                  >
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-accent mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Trophy className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="glass-card p-6 text-center hover:bg-secondary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-primary">{cert.name}</h3>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-accent">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}