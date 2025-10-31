"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Building,
  Trophy,
  Code,
  Briefcase,
  CheckCircle,
  Linkedin,
  Codepen,
  GithubIcon,
  BriefcaseConveyorBelt,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { experienceService } from "@/services/experienceService";

//  types for Experience and Achievement
interface Experience {
  _id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  jobType: string;
  description: string;
  achievements: string[]; 
  technologies: string[];
  createdAt: string;
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Array of background colors for timeline dots
  const timelineColors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-yellow-500 to-orange-500",
    "from-pink-500 to-purple-500",
    "from-red-500 to-pink-500",
    "from-teal-500 to-blue-500",
  ];

  // Array of icons for timeline items
  const timelineIcons = [
    <Building className="w-6 h-6 text-white" />,
    <Briefcase className="w-6 h-6 text-white" />,
    <BriefcaseConveyorBelt className="w-6 h-6 text-white" />,
    <Codepen className="w-6 h-6 text-white" />,
  ];

  // Fetch data from the API
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await experienceService.getAll();
        const sortedExperiences = response.data.sort(
          (a: Experience, b: Experience) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setExperiences(sortedExperiences);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/50 origin-top"
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const colorClass = timelineColors[index % timelineColors.length];
                const icon = timelineIcons[index % timelineIcons.length];
                return (
                  <motion.div
                    key={experience._id}
                    variants={itemVariants}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Dot with Dynamic Color and Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}
                    >
                      {icon}

                      {/* Pulse Animation */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20"
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
                                <Building className="w-4 h-4 mr-2" />
                                {experience.company}
                              </div>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {experience.duration}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {experience.location}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {experience.jobType}
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
                                  key={`${experience._id}-achievement-${achievementIndex}`}
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
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
