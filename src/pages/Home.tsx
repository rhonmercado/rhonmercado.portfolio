import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";
import DashboardCircle from "../components/ui/Dashboard";

const Home: React.FC = () => {
  return (
    <>
      {/* === Landing Section === */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-base text-textPrimary">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
          <img
            src={profileImage}
            alt="Rhonel Edrian Mercado"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-purple p-2"
          />
        </div>

        {/* Intro Text */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-purple mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Hi! I'm Rhonel Edrian Mercado
          </motion.h1>

          <p className="text-white text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm an aspiring full stack developer, currently focused on web development.
            Adaptable and always eager to learn, I embrace new challenges with enthusiasm.
            Continuous learning fuels my drive in this ever-evolving tech world.
            I’m committed to writing clean, efficient code that makes an impact.
          </p>
        </div>
      </section>

      {/* === Dashboard Section === */}
      <section className="bg-base text-textPrimary px-6 md:px-20 py-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-pink mb-12">
          Skills Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
          {[
            { label: "Programming", percent: 55 },
            { label: "Support & Troubleshooting", percent: 45 },
            { label: "Networking", percent: 30 },
            { label: "Data Management", percent: 60 },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <DashboardCircle label={item.label} percent={item.percent} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
