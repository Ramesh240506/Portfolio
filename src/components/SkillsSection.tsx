import { motion } from "framer-motion";
import { 
  Braces, 
  Layout, 
  Server, 
  Database, 
  Wrench,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Braces,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
    skills: ["C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    skills: ["React", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/50",
    iconColor: "text-violet-400",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    hoverBorder: "hover:border-rose-500/50",
    iconColor: "text-rose-400",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Linux"],
  },
];

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`relative border ${category.borderColor} ${category.hoverBorder} rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:shadow-lg h-full overflow-hidden`}>
        {/* Gradient background effect on hover */}
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.color} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-5 relative">
          <motion.div 
            className={`p-2.5 rounded-lg ${category.bgColor} ${category.iconColor}`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
          <h4 className="font-display text-foreground font-semibold text-base">
            {category.title}
          </h4>
        </div>

        {/* Skills as tags */}
        <div className="flex flex-wrap gap-2 relative">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              className={`px-3 py-1.5 font-mono text-xs rounded-lg border ${category.borderColor} ${category.bgColor} text-foreground/80 hover:text-foreground group-hover:border-opacity-60 transition-all duration-300 cursor-default`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 orb-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 orb-cyan opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {"// skills"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">Tech</span>{" "}
            <span className="gradient-text">Stack</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.title} category={category} index={i} />
          ))}

          {/* Extra card for learning */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative border border-dashed border-primary/30 rounded-xl p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-500 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
              <motion.div 
                className="p-3 rounded-full bg-primary/10 text-primary mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <h4 className="font-display text-foreground font-semibold mb-2">
                Always Learning
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently exploring Python, AWS, and System Design
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technologies marquee */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-xs text-center text-muted-foreground mb-4">
            {"// also familiar with"}
          </p>
          <div className="flex gap-4 overflow-hidden">
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{ x: [0, -600] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {["Maven", "Swagger", "Figma", "Vite", "npm", "Gradle", "IntelliJ IDEA", "Maven", "Swagger", "Figma", "Vite", "npm", "Gradle", "IntelliJ IDEA"].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-4 py-2 font-mono text-xs text-muted-foreground/60 border border-border/30 rounded-full whitespace-nowrap hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
