import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FloatingLaptop } from '@/components/3d/FloatingLaptop';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-deep via-background to-space-blue opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.neon.cyan/0.3),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Lalit</span>{' '}
                <span className="text-foreground">Kumar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Crafting seamless user experiences and building scalable cloud-native solutions to deliver impactful digital solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* View My Work → Projects Section */}
              <Button
                asChild
                size="lg"
                variant="neon"
              >
                <a
                  href="https://github.com/Lalitkumar19?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work
                </a>
              </Button>


              {/* Download CV → Google Drive Direct Download */}
              <Button
                asChild
                size="lg"
                variant="glass"
              >
                <a
                  href="https://drive.google.com/file/d/1d-AtPrJeeyvTxQygeqqwO46zCFIZ5s2B/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </motion.div>


            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { Icon: Github, href: "https://github.com/Lalitkumar19" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/lalit-kumar-a65093257/" },
                { Icon: Mail, href: "mailto:lalit_kumar22@manavrachna.net" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          {/* 3D Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <FloatingLaptop />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
      </motion.div>
    </section>
  );
}
