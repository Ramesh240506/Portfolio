import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sports Fan Club Website",
    description: "A role-based web app built with Spring Boot and MySQL. Admins manage cricket events, Super Admins control everything, and public users view matches.",
    tags: ["Spring Boot", "MySQL", "REST API"],
  },
  {
    title: "Portfolio Website",
    description: "This very site! A minimal and responsive personal portfolio website with coder aesthetics and terminal-inspired design.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Linktree Clone",
    description: "A simple tool for managing multiple personal links in one place. RESTful backend with a clean user interface.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with search and 5-day forecast using OpenWeatherMap API and visual weather icons.",
    tags: ["JavaScript", "API", "CSS"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 border-glow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
  >
    {/* Terminal header */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      <span className="ml-2 font-mono text-xs text-muted-foreground truncate">
        ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
      </span>
      <ExternalLink className="ml-auto w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-5">
      <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 font-mono text-xs bg-primary/10 text-primary border border-primary/20 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// projects"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-12">
            <span className="text-foreground">My</span>{" "}
            <span className="gradient-text">Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
