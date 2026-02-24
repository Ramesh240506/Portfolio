import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    icon: "</>",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: ">>_",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: "db:",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    icon: "~/",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Linux"],
  },
];

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="border border-primary/20 rounded-lg p-5 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] h-full">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-primary text-sm bg-primary/10 px-2 py-1 rounded">
          {category.icon}
        </span>
        <h4 className="font-mono text-foreground font-semibold text-sm">
          {category.title}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-muted-foreground/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">
            {"// skills"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-12">
            <span className="text-foreground">Tech</span>{" "}
            <span className="gradient-text">Stack</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
