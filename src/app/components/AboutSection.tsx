'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Palette,
  Zap,
  Users,
  Globe,
  Smartphone,
  Database,
  Cpu,
} from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems']
  },
  {
    category: 'Performance',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    technologies: ['Web Vitals', 'Optimization', 'Lazy Loading', 'Bundle Analysis', 'SEO']
  },
  {
    category: 'Collaboration',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    technologies: ['Git', 'Agile', 'Code Review', 'Documentation', 'Team Leadership']
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Progressive Web Apps']
  },
  {
    category: 'Mobile & Cross-Platform',
    icon: Smartphone,
    color: 'from-rose-500 to-pink-500',
    technologies: ['React Native', 'Responsive Design', 'Mobile-First', 'Touch Interfaces']
  },
  {
    category: 'Backend & APIs',
    icon: Database,
    color: 'from-teal-500 to-cyan-500',
    technologies: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB']
  },
  {
    category: 'Development Tools',
    icon: Cpu,
    color: 'from-gray-500 to-slate-500',
    technologies: ['VS Code', 'Webpack', 'Vite', 'Docker', 'CI/CD']
  }
]

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '100%', label: 'Code Quality' }
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate frontend developer with a keen eye for design and a love for creating
              seamless user experiences through code.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="p-8 bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Started my coding journey 3 years ago with a simple "Hello World" and never looked back.
                      What began as curiosity quickly transformed into a passion for creating digital experiences
                      that make a difference.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I specialize in React and Next.js, with a strong focus on performance, accessibility,
                      and user experience. When I'm not coding, you'll find me exploring new technologies,
                      contributing to open-source projects, or mentoring aspiring developers.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                          className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                        <div className="text-8xl">👨‍💻</div>
                      </div>
                    </motion.div>

                    {/* Floating elements around avatar */}
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 right-4 w-6 h-6 bg-blue-500/30 rounded-full"
                    />

                    <motion.div
                      animate={{
                        x: [0, -8, 0],
                        y: [0, 8, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-8 left-4 w-4 h-4 bg-purple-500/30 rounded-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-center mb-12">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className="h-full p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-0 text-center">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {skill.category}
                      </h4>

                      <div className="flex flex-wrap gap-1 justify-center">
                        {skill.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
