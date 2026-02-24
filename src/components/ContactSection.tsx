import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", username: "@prasanna" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "in/prasanna" },
  { icon: Twitter, label: "Twitter", href: "#", username: "@prasanna" },
  { icon: Mail, label: "Email", href: "mailto:hello@prasanna.dev", username: "hello@prasanna.dev" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">{"// contact"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">Let's</span>{" "}
            <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Feel free to reach out — whether it's a project idea, collaboration, or just a hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary/60">{">"}</span> designed & built by{" "}
            <span className="text-primary">Prasanna</span>{" "}
            <span className="text-primary/60">// 2024</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
