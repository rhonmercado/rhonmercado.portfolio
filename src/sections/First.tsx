// src/pages/homepage/first.tsx

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/images/profile.jpg"; // make sure you have this image or update the path accordingly

const First: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-base text-textPrimary">
      {/* Left Side - Profile Picture */}
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
        <img
          src={profileImage}
          alt="Rhonel Edrian Mercado"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-purple p-2"
        />
      </div>

      {/* Right Side - Intro */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-purple mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Hi! I'm Rhonel Edrian Mercado
        </motion.h1>

        <TypeAnimation
          sequence={[`
            I'm an aspiring full stack developer, currently focused on web development. Adaptable and always eager to learn, I embrace new challenges with enthusiasm. Continuous learning fuels my drive in this ever-evolving tech world. I’m committed to writing clean, efficient code that makes an impact.
          `]}
          wrapper="p"
          speed={55}
          className="text-textSecondary text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          cursor={true}
          repeat={0}
        />
      </div>
    </section>
  );
};

export default First;
