import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, TrendingUp, ExternalLink, Code2, Flame } from "lucide-react";

const dsaStats = [
  { label: "Problems Solved", value: 500, suffix: "+", icon: Target, color: "text-emerald-400", bgColor: "bg-emerald-500/10", gradient: "from-emerald-500 to-green-500" },
  { label: "Day Streak", value: 150, suffix: "+", icon: Flame, color: "text-orange-400", bgColor: "bg-orange-500/10", gradient: "from-orange-500 to-amber-500" },
];

const platforms = [
  { 
    name: "LeetCode", 
    handle: "@RAMESH_P_24x", 
    problems: "450+", 
    color: "from-amber-500 to-orange-500",
    bgGradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
    link: "https://leetcode.com/RAMESH_P_24x/"
  },
  { 
    name: "GeeksforGeeks", 
    handle: "@aathimnm9", 
    problems: "50+", 
    color: "from-emerald-500 to-green-500",
    bgGradient: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-500/20",
    link: "https://auth.geeksforgeeks.org/user/aathimnm9"
  },
];

const topics = [
  "Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming",
  "Binary Search", "Greedy", "Backtracking", "Stack & Queue", "Hashing",
  "Sorting", "Recursion", "Sliding Window", "Two Pointers", "Bit Manipulation",
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

const DSASection = () => {
  return (
    <section id="dsa" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 orb-cyan opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 orb-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4" />
            {"// problem_solving"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">DSA &</span>{" "}
            <span className="gradient-text">Competitive Coding</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sharpening my algorithmic thinking one problem at a time
          </p>
        </motion.div>

        {/* Stats and Platforms Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Stats Cards */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {dsaStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex-1 group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div 
                  className={`inline-flex p-3 rounded-xl ${stat.bgColor} ${stat.color} mb-3`}
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <p className={`text-3xl md:text-4xl font-bold font-display ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Platforms */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-4 rounded-xl border ${platform.borderColor} ${platform.bgGradient} hover:border-opacity-60 transition-all duration-300`}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-white font-bold`}>
                    {platform.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {platform.handle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-foreground">{platform.problems}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Topics Section */}
        <motion.div
          className="bg-card/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-mono text-sm text-foreground font-semibold mb-6 flex items-center gap-2">
            <span className="text-primary">$</span> topics_covered
          </h4>
          
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <motion.span
                key={topic}
                className="px-4 py-2 font-mono text-xs rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {topic}
              </motion.span>
            ))}
          </div>

          {/* Code snippet decoration */}
          <motion.div
            className="mt-8 p-4 rounded-lg bg-background/50 border border-border font-mono text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-muted-foreground mb-2">// my_approach.cpp</p>
            <p><span className="text-accent">while</span> (<span className="text-cyan-400">!mastered</span>) {"{"}</p>
            <p className="pl-4"><span className="text-cyan-400">solve</span>(<span className="text-amber-300">"problems"</span>);</p>
            <p className="pl-4"><span className="text-cyan-400">learn</span>(<span className="text-amber-300">"patterns"</span>);</p>
            <p className="pl-4"><span className="text-cyan-400">improve</span>();</p>
            <p>{"}"}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSASection;
