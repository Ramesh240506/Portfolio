import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "Spring Boot", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "MySQL", level: 75 },
  { name: "MongoDB", level: 65 },
  { name: "Git", level: 80 },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <div className="flex justify-between mb-1.5">
      <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
      <span className="font-mono text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// skills"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-12">
            <span className="text-foreground">Tech</span>{" "}
            <span className="gradient-text">Stack</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
