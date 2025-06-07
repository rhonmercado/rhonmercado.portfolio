import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 text-textPrimary"
    >
      <motion.h2
        className="text-3xl font-bold text-purple mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-textSecondary leading-relaxed text-lg max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I am a passionate web developer specializing in building sleek,
        modern, and user-friendly web applications using the latest
        technologies like React, TypeScript, and Framer Motion.
      </motion.p>
    </section>
  );
};

export default About;
