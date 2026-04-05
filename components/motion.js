"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, direction = "left", delay = 0, className, ...props }) => {
  const x = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
