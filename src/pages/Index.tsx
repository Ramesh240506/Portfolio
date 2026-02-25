import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import DSASection from "@/components/DSASection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Custom cursor for desktop */}
      <CustomCursor />
      
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={`min-h-screen bg-background noise ${isLoading ? 'overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <DSASection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
