"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  Sparkles,
  Zap,
  Users,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { projectService } from "@/services/projectService";

const projectCategories = [
  "All",
  "Web App",
  "E-commerce",
  "Portfolio",
  "Tool",
  "Mobile App",
];

// Map API category to icons and gradient colors
const categoryMap: Record<string, { icon: any; color: string }> = {
  "Web App": { icon: Users, color: "from-blue-500 to-indigo-500" },
  "E-commerce": { icon: ShoppingCart, color: "from-emerald-500 to-teal-500" },
  Portfolio: { icon: Sparkles, color: "from-purple-500 to-pink-500" },
  Tool: { icon: Zap, color: "from-yellow-500 to-orange-500" },
  "Mobile App": { icon: Users, color: "from-rose-500 to-pink-500" },
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectService.getAll();
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
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
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
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
            {filteredProjects.map((project, index) => {
              const { icon: ProjectIcon, color } = categoryMap[
                project.category
              ] || { icon: Sparkles, color: "from-gray-500 to-gray-700" };

              return (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                >
                  <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />

                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          {/* Overlay Buttons */}
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </motion.a>
                          )}
                          {project.codeLink && (
                            <motion.a
                              href={project.codeLink}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                            >
                              <Github className="w-5 h-5 text-white" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>

                      {/* Project Icon */}
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <ProjectIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0"
                          >
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
                        {project.technologies
                          .slice(0, 3)
                          .map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
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
                        {project.features.slice(0, 2).map((feature: string) => (
                          <div
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 mt-6">
                        {project.codeLink && (
                          <a
                            href={project.codeLink}
                            className="flex-1 inline-flex items-center justify-center border border-input text-xs bg-background shadow-sm dark:text-white hover:bg-accent hover:text-accent-foreground px-4 font-medium transition-all duration-300 hover:scale-105 rounded-md"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            className="flex-1 inline-flex items-center justify-center border border-primary text-white bg-primary hover:bg-primary/90 py-2 rounded-md px-4 text-xs font-medium transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
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
  );
}
