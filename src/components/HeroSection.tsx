import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  "/**/"
];

const FloatingCode = ({ text, style }: { text: string; style: React.CSSProperties }) => (
  <motion.span
    className="absolute font-mono text-primary/10 text-2xl select-none pointer-events-none"
    style={style}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {text}
  </motion.span>
);

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="terminal-cursor text-primary">|</span>
    </span>
  );
};

const HeroSection = () => {
  const positions = codeSnippets.map((_, i) => ({
    top: `${10 + (i * 17) % 80}%`,
    left: `${5 + (i * 23) % 90}%`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating code decorations */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode key={i} text={snippet} style={positions[i]} />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(142 72% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 72% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary/70 text-sm mb-4 tracking-widest">
            {"// welcome to my portfolio"}
          </p>

          <h1 className="text-6xl md:text-8xl font-bold font-display mb-6 tracking-tight">
            <span className="text-foreground">I'm </span>
            <span className="gradient-text text-glow">Prasanna</span>
          </h1>

          <div className="font-mono text-lg md:text-xl text-secondary-foreground mb-8">
            <TypeWriter text="Web Developer, Designer & Code Enthusiast" delay={800} />
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:shadow-[0_0_20px_hsl(142_72%_50%/0.4)] transition-all duration-300"
          >
            {">"} view_projects()
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary/30 text-primary font-mono text-sm rounded-md hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
          >
            {">"} contact_me()
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary/50 rounded-full mt-1.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
