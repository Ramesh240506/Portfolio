import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Rocket, Target, Coffee } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 5, suffix: "+", icon: Rocket },
  { label: "Problems Solved", value: 500, suffix: "+", icon: Target },
  { label: "Cups of Coffee", value: 1000, suffix: "+", icon: Coffee },
  { label: "Lines of Code", value: 50, suffix: "K+", icon: Code2 },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 orb-green opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 orb-cyan opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// about"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">About</span>{" "}
            <span className="gradient-text">Me</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content - Terminal style */}
          <motion.div
            className="lg:col-span-3 bg-card border border-border rounded-xl overflow-hidden border-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-destructive/70 hover:bg-destructive transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-primary/70 hover:bg-primary transition-colors" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">about.tsx — ~/portfolio</span>
            </div>

            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <span className="text-primary/50 select-none mr-4">1</span>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-primary">=</span>{" "}
                  <span className="text-primary">{"{"}</span>
                </p>

                <div className="pl-8 space-y-3">
                  <p className="text-muted-foreground">
                    <span className="text-primary/50 select-none mr-4">2</span>
                    <span className="text-cyan-400">name</span>
                    <span className="text-primary">:</span>{" "}
                    <span className="text-amber-300">"Ramesh"</span>
                    <span className="text-primary">,</span>
                  </p>

                  <p className="text-muted-foreground">
                    <span className="text-primary/50 select-none mr-4">3</span>
                    <span className="text-cyan-400">role</span>
                    <span className="text-primary">:</span>{" "}
                    <span className="text-amber-300">"Full Stack Developer"</span>
                    <span className="text-primary">,</span>
                  </p>

                  <div>
                    <p className="text-muted-foreground">
                      <span className="text-primary/50 select-none mr-4">4</span>
                      <span className="text-cyan-400">bio</span>
                      <span className="text-primary">:</span>{" "}
                      <span className="text-amber-300">`</span>
                    </p>
                    <p className="text-foreground/80 pl-8 py-2 leading-relaxed">
                      Hey there! I'm a passionate full-stack developer who loves 
                      building real-world applications. I enjoy crafting scalable 
                      backend systems, clean APIs, and modern web interfaces that 
                      solve actual problems.
                    </p>
                    <p className="text-muted-foreground pl-8">
                      <span className="text-amber-300">`</span>
                      <span className="text-primary">,</span>
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    <span className="text-primary/50 select-none mr-4">5</span>
                    <span className="text-cyan-400">currentFocus</span>
                    <span className="text-primary">:</span>{" "}
                    <span className="text-primary">[</span>
                    <span className="text-amber-300">"C++"</span>
                    <span className="text-primary">,</span>{" "}
                    <span className="text-amber-300">"DSA"</span>
                    <span className="text-primary">,</span>{" "}
                    <span className="text-amber-300">"System Design"</span>
                    <span className="text-primary">]</span>
                    <span className="text-primary">,</span>
                  </p>

                  <p className="text-muted-foreground">
                    <span className="text-primary/50 select-none mr-4">6</span>
                    <span className="text-cyan-400">goal</span>
                    <span className="text-primary">:</span>{" "}
                    <span className="text-amber-300">"Land a role at a top tech company"</span>
                    <span className="text-primary">,</span>
                  </p>

                  <p className="text-muted-foreground">
                    <span className="text-primary/50 select-none mr-4">7</span>
                    <span className="text-cyan-400">hobbies</span>
                    <span className="text-primary">:</span>{" "}
                    <span className="text-primary">[</span>
                    <span className="text-amber-300">"Anime"</span>
                    <span className="text-primary">,</span>{" "}
                    <span className="text-amber-300">"Building Projects"</span>
                    <span className="text-primary">,</span>{" "}
                    <span className="text-amber-300">"Learning"</span>
                    <span className="text-primary">]</span>
                  </p>
                </div>

                <p className="text-muted-foreground">
                  <span className="text-primary/50 select-none mr-4">8</span>
                  <span className="text-primary">{"}"}</span>
                  <span className="text-primary">;</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group p-5 bg-card/50 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold font-display text-foreground">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground font-mono">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick highlights */}
            <motion.div
              className="p-5 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="font-mono text-xs text-primary mb-3">{"// quick_facts"}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  Based in India
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  Open to Remote Work
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  Available for Freelance
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;