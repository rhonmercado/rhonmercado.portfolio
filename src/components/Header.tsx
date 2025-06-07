import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Facebook, Github } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://linkedin.com/in/your-profile",
  },
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    url: "https://facebook.com/your-profile",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/your-profile",
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-base bg-opacity-90 backdrop-blur-md z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-purple font-bold text-xl">
          YourName
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-textPrimary">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-pink transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons (before Let's Connect) */}
          <div className="flex space-x-4 ml-6">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-textSecondary hover:text-pink transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Let's Connect Button */}
          <Link
            to="/contact"
            className="ml-6 px-5 py-2 border border-pink rounded-md text-pink font-semibold hover:bg-pink hover:text-base transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Let's Connect
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-textPrimary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden bg-base text-textPrimary flex flex-col space-y-4 py-4 px-6"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="block py-2 hover:text-pink transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Social icons in mobile menu (before button) */}
          <li className="flex space-x-6 py-2">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-textSecondary hover:text-pink transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </li>

          {/* Let's Connect button mobile */}
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 border border-pink rounded-md text-pink font-semibold hover:bg-pink hover:text-base transition-colors duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </Link>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
};

export default Header;
