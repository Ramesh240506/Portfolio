import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, MessageSquare, Heart, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const socials = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/Ramesh240506", 
    username: "@Ramesh240506",
    color: "hover:border-gray-400 hover:text-gray-300"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/rameshp24/", 
    username: "in/rameshp24",
    color: "hover:border-blue-400 hover:text-blue-400"
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:aathip143@gmail.com", 
    username: "aathip143@gmail.com",
    color: "hover:border-primary hover:text-primary"
  },
];

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  formState.name,
          from_email: formState.email,
          reply_to:   formState.email,
          message:    formState.message,
          to_email:   "aathip143@gmail.com",
        },
        PUBLIC_KEY
      );

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again or reach out directly by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 orb-green opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 orb-cyan opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            {"// contact"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-foreground">Let's</span>{" "}
            <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Terminal-style message */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">connect.sh</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  <span className="text-primary">$</span> echo "Hello, World!"
                </p>
                <p className="text-foreground/80 pl-4 mb-4">
                  I'm always excited to work on interesting projects and collaborate with creative minds. Whether you have a cool idea, need help with a project, or just want to say hi — my inbox is always open!
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cat location.txt
                </p>
                <p className="text-foreground/80 pl-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  India • Available for Remote Work
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs text-muted-foreground mb-4">{"// find_me_on"}</p>
              <div className="space-y-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 bg-card/50 border border-border rounded-lg transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-sm text-foreground">{social.label}</p>
                      <p className="font-mono text-xs text-muted-foreground">{social.username}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 border-glow">
              <h4 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send a Message
              </h4>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/20 text-primary mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <p className="font-display text-lg text-foreground mb-2">Thanks for reaching out!</p>
                  <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted-foreground mb-2">
                      {"// your_name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-2">
                      {"// your_email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-muted-foreground mb-2">
                      {"// your_message"}
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Hey, I'd like to discuss..."
                    />
                  </div>

                  {error && (
                    <p className="font-mono text-xs text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:shadow-[0_0_30px_hsl(142_72%_50%/0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        send_message()
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground order-2 md:order-1">
              <span className="text-primary/60">{">"}</span> designed & built with{" "}
              <Heart className="w-3 h-3 inline text-destructive" /> by{" "}
              <span className="text-primary">Ramesh</span>
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground/60 order-3">
              © 2026 • All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
