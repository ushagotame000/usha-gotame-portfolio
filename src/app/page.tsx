import React from "react";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const page: React.FC = () => {
  return (
     <>
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  );
};

export default page;
