'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  Sparkles,
  Zap,
  Users,
  ShoppingCart,
} from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'

const projectCategories = ['All', 'Web App', 'E-commerce', 'Portfolio', 'Tool']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'A modern e-commerce platform with advanced filtering, cart management, and payment integration. Built with Next.js and Stripe.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
    features: ['Payment Integration', 'Admin Dashboard', 'Real-time Inventory', 'Mobile Responsive'],
    github: '#',
    live: '#',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Web App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and advanced project tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    features: ['Real-time Collaboration', 'Drag & Drop', 'Time Tracking', 'Team Analytics'],
    github: '#',
    live: '#',
    icon: Users,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    category: 'Portfolio',
    description: 'A stunning portfolio website with smooth animations, interactive elements, and a modern design aesthetic.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    features: ['Smooth Animations', 'Dark Mode', 'Contact Form', 'SEO Optimized'],
    github: '#',
    live: '#',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Performance Analytics Tool',
    category: 'Tool',
    description: 'A comprehensive web performance monitoring tool with real-time metrics, detailed reports, and optimization suggestions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'WebAPIs'],
    features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert System', 'Performance Insights'],
    github: '#',
    live: '#',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    category: 'Web App',
    description: 'A unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Nuxt.js', 'Chart.js', 'Firebase', 'Vuetify'],
    features: ['Multi-platform Support', 'Post Scheduling', 'Analytics Dashboard', 'Team Collaboration'],
    github: '#',
    live: '#',
    icon: Users,
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 6,
    title: 'Creative Agency Site',
    category: 'Portfolio',
    description: 'A visually stunning website for a creative agency with portfolio showcase, team profiles, and client testimonials.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
    technologies: ['Gatsby', 'GraphQL', 'Contentful', 'GSAP', 'Styled Components'],
    features: ['CMS Integration', 'Advanced Animations', 'Gallery Showcase', 'Contact Forms'],
    github: '#',
    live: '#',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications
              built with cutting-edge technologies and attention to detail.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 bg-muted/50 rounded-lg border border-border/50 backdrop-blur-sm">
              <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/10'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Project Icon */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {project.features.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-6">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
