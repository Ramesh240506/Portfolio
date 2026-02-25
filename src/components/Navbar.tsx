import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "dsa", href: "#dsa" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = links.map(link => link.href.slice(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/5" 
            : ""
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="font-mono text-primary font-bold text-xl relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{"<R />"}</span>
            <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`relative font-mono text-sm px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className="relative z-10">.{link.label}()</span>
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-primary/10 rounded-md"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="ml-4 px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-mono text-sm rounded-md hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              let's talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-card border-l border-border z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="px-4 py-6 space-y-2">
                {links.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block font-mono text-base px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? "text-primary bg-primary/10 border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-primary/60">{">"}</span> .{link.label}()
                    </motion.a>
                  );
                })}

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block mt-6 px-4 py-3 bg-primary text-primary-foreground font-mono text-center text-sm rounded-lg hover:shadow-[0_0_20px_hsl(142_72%_50%/0.3)] transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {">"} let's_talk()
                </motion.a>
              </div>

              {/* Footer */}
              <div className="absolute bottom-8 left-4 right-4">
                <p className="font-mono text-xs text-muted-foreground text-center">
                  <span className="text-primary/60">{"// "}</span>
                  built with passion
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
