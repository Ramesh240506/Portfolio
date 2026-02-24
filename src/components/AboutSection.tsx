import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// about"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-8">
            <span className="text-foreground">About</span>{" "}
            <span className="gradient-text">Me</span>
          </h3>
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-lg p-6 md:p-8 border-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">about.tsx</span>
          </div>

          <div className="font-mono text-sm leading-relaxed space-y-3">
            <p className="text-muted-foreground">
              <span className="text-primary/60">1 </span>
              <span className="text-accent">const</span>{" "}
              <span className="text-foreground">aboutMe</span>{" "}
              <span className="text-primary">=</span>{" "}
              <span className="text-primary">{"{"}</span>
            </p>
            <p className="text-muted-foreground pl-6">
              <span className="text-primary/60">2 </span>
              <span className="text-accent">intro</span>
              <span className="text-primary">:</span>{" "}
              <span className="text-foreground/80">"Hey there! I'm Prasanna — part-time coder, full-time curious human."</span>
              <span className="text-primary">,</span>
            </p>
            <p className="text-muted-foreground pl-6">
              <span className="text-primary/60">3 </span>
              <span className="text-accent">passion</span>
              <span className="text-primary">:</span>{" "}
              <span className="text-foreground/80">"I love building things that live on the internet — clean APIs, quirky side projects, and all-nighter experiments."</span>
              <span className="text-primary">,</span>
            </p>
            <p className="text-muted-foreground pl-6">
              <span className="text-primary/60">4 </span>
              <span className="text-accent">learning</span>
              <span className="text-primary">:</span>{" "}
              <span className="text-foreground/80">"Currently deep into C++, Spring Boot, and a pinch of web magic."</span>
              <span className="text-primary">,</span>
            </p>
            <p className="text-muted-foreground pl-6">
              <span className="text-primary/60">5 </span>
              <span className="text-accent">offDuty</span>
              <span className="text-primary">:</span>{" "}
              <span className="text-foreground/80">"Overthinking bugs, sketching startup ideas, or memes disguised as research."</span>
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary/60">6 </span>
              <span className="text-primary">{"}"}</span>
              <span className="text-primary">;</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
