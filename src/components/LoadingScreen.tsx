import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      {/* Logo animation */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="font-mono text-5xl md:text-6xl font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {"<R />"}
        </motion.span>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 blur-2xl bg-primary/30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 1] }}
          transition={{ duration: 1.5, times: [0, 0.5, 1] }}
        />
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="mt-4 font-mono text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing portfolio...
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
