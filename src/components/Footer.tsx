import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base bg-opacity-90 backdrop-blur-md text-textSecondary text-center py-6 mt-20">
      <p>
        © {new Date().getFullYear()} YourName. All rights reserved.
      </p>
      <p className="mt-2">
        Built with React, TypeScript, Framer Motion & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
