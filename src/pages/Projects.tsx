import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A cool project using React and TypeScript.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome app built with Framer Motion animations.",
    link: "#",
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 text-textPrimary"
    >
      <motion.h2
        className="text-3xl font-bold text-purple mb-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(({ title, description, link }, idx) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg bg-base bg-opacity-70 backdrop-blur-md hover:bg-purple hover:text-base transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-textSecondary">{description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
