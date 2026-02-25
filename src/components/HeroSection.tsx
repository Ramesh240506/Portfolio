import { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

const codeSnippets = [
  "{ }",
  "</>",
  "fn()",
  "=>",
  "[ ]",
  "&&",
  "||",
  "++",
  "::",
  "/**/",
  "npm",
  "git",
  "API",
  "SQL",
];

const FloatingCode = ({ text, style, delay }: { text: string; style: React.CSSProperties; delay: number }) => (
  <motion.span
    className="absolute font-mono text-primary/[0.07] text-xl md:text-2xl select-none pointer-events-none font-medium"
    style={style}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{ 
      opacity: { duration: 1, delay: delay * 0.1 },
      y: { duration: 5 + Math.random() * 3, repeat: Infinity, ease: "easeInOut", delay: delay * 0.2 },
      rotate: { duration: 6 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: delay * 0.1 },
    }}
  >
    {text}
  </motion.span>
);

const TypeWriter = ({ texts, delay = 0 }: { texts: string[]; delay?: number }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    const currentText = texts[textIndex];
    const typeSpeed = isDeleting ? 30 : 60;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < currentText.length) {
          setDisplayed(currentText.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [started, displayed, isDeleting, textIndex, texts]);

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <span className="terminal-cursor text-primary ml-0.5 font-light">|</span>
    </span>
  );
};

const ParticleField = () => {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Ramesh240506", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rameshp24/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aathip143@gmail.com", label: "Email" },
];

const HeroSection = () => {
  const positions = useMemo(() => codeSnippets.map((_, i) => ({
    top: `${8 + (i * 13) % 80}%`,
    left: `${3 + (i * 19) % 94}%`,
  })), []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const roles = [
    "Full Stack Developer",
    "C++ & DSA Enthusiast", 
    "Spring Boot Developer",
    "React Builder",
    "Problem Solver",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 orb-green rounded-full animate-glow-pulse"
        style={{ x: springX, y: springY }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 orb-cyan rounded-full animate-glow-pulse"
        style={{ x: springX, y: springY, animationDelay: "2s" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-purple rounded-full opacity-30 animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Particle field */}
      <ParticleField />

      {/* Floating code decorations */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode key={i} text={snippet} style={positions[i]} delay={i} />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(142 72% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 72% 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(220_20%_4%)_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal-style intro */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-primary/80 text-xs md:text-sm tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p 
            className="font-mono text-primary/60 text-sm mb-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// welcome to my portfolio"}
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display mb-4 tracking-tight flex flex-wrap items-baseline justify-center gap-x-4">
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="gradient-text text-glow inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Ramesh
            </motion.span>
          </h1>

          <motion.div 
            className="font-mono text-base sm:text-lg md:text-xl text-secondary-foreground mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TypeWriter texts={roles} delay={1000} />
          </motion.div>

          {/* Brief description */}
          <motion.p
            className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Crafting scalable web applications with clean code. 
            Passionate about building solutions that make a difference.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-mono text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(142_72%_50%/0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {">"} view_projects()
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-3.5 border border-primary/30 text-primary font-mono text-sm rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 flex items-center gap-2"
          >
            {">"} contact_me()
          </a>
          <a href="/Ramesh_CV.pdf" target="_blank" rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-muted-foreground/20 text-muted-foreground font-mono text-sm rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            resume.pdf
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-xs">scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;