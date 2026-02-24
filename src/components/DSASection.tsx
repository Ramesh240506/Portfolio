import { motion } from "framer-motion";

const dsaStats = [
  { label: "Problems Solved", value: "500+", icon: "✓" },
  { label: "Contests", value: "50+", icon: "⚡" },
  { label: "Max Rating", value: "1800+", icon: "★" },
];

const platforms = [
  { name: "LeetCode", handle: "@username", problems: "300+", color: "text-amber-400" },
  { name: "Codeforces", handle: "@username", problems: "150+", color: "text-blue-400" },
  { name: "GeeksforGeeks", handle: "@username", problems: "100+", color: "text-emerald-400" },
];

const topics = [
  "Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming",
  "Binary Search", "Greedy", "Backtracking", "Stack & Queue", "Hashing",
  "Sorting", "Recursion", "Sliding Window", "Two Pointers", "Bit Manipulation",
];

const DSASection = () => {
  return (
    <section id="dsa" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// competitive_coding"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-12">
            <span className="text-foreground">DSA &</span>{" "}
            <span className="gradient-text">Problem Solving</span>
          </h3>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {dsaStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center border border-primary/20 rounded-lg p-5 bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          className="border border-primary/20 rounded-lg p-5 bg-card/50 backdrop-blur-sm mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="font-mono text-sm text-foreground font-semibold mb-4">
            <span className="text-primary">$</span> coding_platforms
          </h4>
          <div className="space-y-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className={`${platform.color} font-semibold`}>{platform.name}</span>
                  <span className="text-muted-foreground">{platform.handle}</span>
                </div>
                <span className="text-muted-foreground">{platform.problems} solved</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h4 className="font-mono text-sm text-foreground font-semibold mb-4">
            <span className="text-primary">$</span> topics_covered
          </h4>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <motion.span
                key={topic}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-muted-foreground/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSASection;
