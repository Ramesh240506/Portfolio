import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Folder, ArrowRight } from "lucide-react";

const featuredProject = {
  title: "Job Portal Application",
  description: "A comprehensive full-stack job portal where employers can post jobs and track applications, while job seekers can search, apply, and manage their applications. Features include real-time notifications, advanced search filters, and analytics dashboard.",
  longDescription: "Built with scalability in mind, this platform handles thousands of concurrent users with efficient caching and database optimization.",
  tags: ["Spring Boot", "React", "MySQL", "JWT"],
  features: ["JWT Authentication", "Role-based Access", "Real-time Updates", "Email Notifications"],
  github: "https://github.com/Ramesh240506",
  live: "#",
  image: "/api/placeholder/600/400",
};

const projects = [
  {
    title: "Employee Management System",
    description: "A React-based system to manage employee details, attendance, and reports. Includes form validation, testing with Jest, and modular components.",
    tags: ["React", "TypeScript", "Spring Boot"],
    github: "https://github.com/Ramesh240506",
    live: "#",
  },
  {
    title: "Skill Swap Platform",
    description: "A platform for users to exchange skills and services. Built with Express and React, featuring user profiles, skill listings, and a messaging system.",
    tags: ["Express", "React", "MongoDB", "Socket.io"],
    github: "https://github.com/Ramesh240506",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A developer portfolio with terminal-inspired design, smooth animations, and responsive layout. Built with React and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Ramesh240506",
    live: "#",
  },
];

const FeaturedProjectCard = () => (
  <motion.div
    className="group relative bg-card border border-border rounded-2xl overflow-hidden border-glow mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="grid md:grid-cols-2 gap-0">
      {/* Left: Project visualization */}
      <div className="relative p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20 min-h-[300px]">
        {/* Code window mockup */}
        <div className="w-full max-w-sm">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">JobPortal</span>
            </div>
            <div className="p-4 font-mono text-xs space-y-2">
              <p><span className="text-accent">import</span> <span className="text-foreground">{"{"} Job {"}"}</span> <span className="text-accent">from</span> <span className="text-amber-300">'./models'</span>;</p>
              <p className="text-muted-foreground">// Finding your dream job</p>
              <p><span className="text-accent">const</span> <span className="text-cyan-400">findJobs</span> = <span className="text-primary">async</span> () <span className="text-primary">={">"}</span> {"{"}</p>
              <p className="pl-4"><span className="text-accent">return</span> <span className="text-cyan-400">await</span> Job.<span className="text-cyan-400">find</span>();</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div 
          className="absolute top-4 left-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full flex items-center gap-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="font-mono text-xs text-primary">Featured</span>
        </motion.div>
      </div>

      {/* Right: Project details */}
      <div className="p-6 md:p-8 flex flex-col">
        <div className="mb-4">
          <p className="font-mono text-xs text-primary mb-2">Featured Project</p>
          <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3">
            {featuredProject.title}
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {featuredProject.description}
          </p>
          <p className="text-sm text-muted-foreground/70 italic mb-4">
            {featuredProject.longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <p className="font-mono text-xs text-muted-foreground mb-2">// key_features</p>
          <div className="grid grid-cols-2 gap-2">
            {featuredProject.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {featuredProject.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 font-mono text-xs bg-primary/10 text-primary border border-primary/20 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={featuredProject.github}
            target="https://github.com/Ramesh240506"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
         
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Terminal header */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
      <Folder className="w-4 h-4 text-primary/60" />
      <span className="font-mono text-xs text-muted-foreground truncate flex-1">
        ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
      </span>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a 
          href={project.live}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="p-5 relative">
      <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {project.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 font-mono text-[10px] bg-muted/50 text-muted-foreground border border-border rounded-md group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
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
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 orb-green opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 orb-purple opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// projects"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">My</span>{" "}
            <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of projects I've built to solve real problems and learn new technologies
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedProjectCard />

        {/* Other Projects */}
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"// other_noteworthy_projects"}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Ramesh240506"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-mono text-sm rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;