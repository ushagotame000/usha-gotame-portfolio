'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import {
  Calendar,
  MapPin,
  Building2,
  Trophy,
  Users,
  Code,
  Lightbulb,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading frontend development for enterprise applications serving 100k+ users. Architecting scalable React applications and mentoring junior developers.',
    achievements: [
      'Improved application performance by 40% through code optimization',
      'Led a team of 5 developers in rebuilding the main dashboard',
      'Implemented automated testing reducing bugs by 60%',
      'Introduced design system that increased development speed by 30%'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
    icon: Building2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'StartupHub Inc.',
    location: 'Austin, TX',
    period: '2021 - 2022',
    type: 'Full-time',
    description: 'Developed modern web applications for startup clients. Collaborated closely with designers and backend teams to deliver pixel-perfect interfaces.',
    achievements: [
      'Built 15+ responsive web applications from scratch',
      'Reduced page load times by 50% through optimization techniques',
      'Implemented real-time features using WebSocket technology',
      'Contributed to open-source projects used by 10k+ developers'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Docker'],
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Junior Frontend Developer',
    company: 'WebDesign Agency',
    location: 'Remote',
    period: '2020 - 2021',
    type: 'Full-time',
    description: 'Started my professional journey creating beautiful websites for small businesses and agencies. Learned modern development practices and tools.',
    achievements: [
      'Delivered 20+ client websites with 100% satisfaction rate',
      'Learned modern JavaScript frameworks and tools',
      'Collaborated with international teams across different time zones',
      'Received "Rookie of the Year" award for outstanding performance'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Figma'],
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Various',
    period: '2019 - 2020',
    type: 'Freelance',
    description: 'Started freelancing while completing my degree. Built websites for local businesses and gained real-world experience in client communication.',
    achievements: [
      'Completed 25+ freelance projects successfully',
      'Built long-term relationships with 10+ recurring clients',
      'Learned project management and client communication skills',
      'Generated $50k+ in revenue during the first year'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    icon: Users,
    color: 'from-orange-500 to-red-500'
  }
]

const stats = [
  { icon: Trophy, label: 'Years Experience', value: '3+' },
  { icon: Building2, label: 'Companies', value: '4' },
  { icon: Code, label: 'Projects Delivered', value: '60+' },
  { icon: TrendingUp, label: 'Performance Improvement', value: '40%' }
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  }

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
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
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in frontend development, from curious beginner to experienced professional,
              building impactful solutions along the way.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/50 origin-top"
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
                  >
                    <experience.icon className="w-8 h-8 text-white" />

                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.color} opacity-20`}
                    />
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                              {experience.title}
                            </h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <Building2 className="w-4 h-4 mr-2" />
                              {experience.company}
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {experience.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {experience.location}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {experience.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Trophy className="w-4 h-4 mr-2 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <motion.div
                                key={`${experience.id}-achievement-${achievementIndex}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 0.8 + index * 0.1 + achievementIndex * 0.1 }}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
