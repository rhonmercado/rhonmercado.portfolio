import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

const contactDetails = [
  {
    label: "Phone / Viber",
    value: "+63 956 268 1437 / Viber",
    icon: <Phone size={30} />,
  },
  {
    label: "Email",
    value: "rhonmercado520@gmail.com",
    icon: <Mail size={30} />,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/rui-profile",
  },
  {
    label: "GitHub",
    icon: Github,
    url: "https://github.com/rhonmercado",
  },
  {
    label: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/rhon.edrian.mercado",
  },
  {
    label: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/raw.nly99/",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Contact: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen bg-base text-textPrimary px-6 py-24 md:px-20 max-w-4xl mx-auto flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-pink mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Feel free to reach out.
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="w-full flex flex-col items-center gap-6 text-white text-lg mb-16"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {contactDetails.map(({ label, value, icon }, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-4"
            custom={i}
            variants={itemVariants}
          >
            <div className="text-pink">{icon}</div>
            <span className="font-medium">{value}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {socialLinks.map(({ label, icon: Icon, url }, i) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-textSecondary hover:text-pink transition-colors"
            custom={i}
            variants={itemVariants}
          >
            <Icon size={42} />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
