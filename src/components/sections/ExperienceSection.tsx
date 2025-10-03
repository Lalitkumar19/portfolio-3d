import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Manav Rachna University',
      position: 'Full Stack Developer',
      period: 'JULY2025 - Present',
      location: 'Haryana, India',
      description: 'Building a scalable e-learning platform for the college. Designed and developed user-friendly interfaces, implemented secure authentication, and integrated APIs to streamline online learning and resource management.',
      achievements: [
        'Built student dashboard, course and faculty modules',
        'Added secure login with OTP-based authentication',
        'Connected frontend and backend using REST APIs',
        'Optimized queries and improved page load speed',
        'Worked with faculty to refine platform features',
      ],
    },
    {
      company: 'OASIS INFOBYTE',
      position: 'Web Developer',
      period: 'JUNE2024 - JULY2024',
      location: 'Remote',
      description: 'Designed and developed interactive web projects including a gym landing page, functional calculator, and temperature converter, focusing on responsive design and clean user interfaces.',
      achievements: [
        'Created a responsive landing page for a gym',
        'Developed a functional calculator with clean UI',
        'Built a temperature converter using JavaScript logic',
        'Applied modern HTML, CSS, and JS best practices',
        'Enhanced user experience with responsive layouts',
      ],
    },
    {
      company: 'CodeSoft',
      position: 'Web Developer',
      period: 'JUNE2024 - JULY2024',
      location: 'Remote',
      description: 'Developed responsive landing pages for a Hotel website and personal Portfolio, focusing on modern UI, smooth navigation, and mobile-friendly design.',
      achievements: [
        'Built a hotel landing page with booking UI',
        'Designed a personal portfolio with smooth animations',
        'Ensured responsive layouts across mobile and desktop',
        'Optimized images and assets for faster load times',
        'Implemented reusable components with clean code structure',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Solutions',
      issuer: 'LinkedIn',
      year: '2025',
      icon: '🏗️',
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'LinkedIn',
      year: '2025',
      icon: '💻',
    },
    {
      name: 'Data Structure & Algorithms with JAVA',
      issuer: 'Coding Ninja',
      year: '2025',
      icon: '📊',
    },
    {
      name: 'Cloud Computing',
      issuer: 'NPTEL - IIT Madras',
      year: '2025',
      icon: '☁️',
    },
     {
      name: 'MongoDB Developer',
      issuer: 'MongoDB server',
      year: '2024',
      icon: '🍃',
    },
    {
      name: 'Version Control',
      issuer: 'LinkedIn',
      year: '2024',
      icon: '🚀',
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
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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