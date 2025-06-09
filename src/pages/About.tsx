import React from "react";
import { motion } from "framer-motion";

// === Personal Info Data ===
const personalInfo = [
  { label: "Full Name", value: "Rhonel Edrian Evangelista Mercado" },
  { label: "Age", value: "26 y/o" },
  { label: "Gender", value: "Male" },
  { label: "Role", value: "Aspiring Full-Stack Developer" },
  { label: "Location", value: "Marilao, Bulacan" },
  { label: "Birthday", value: "05/20/1999" },
  { label: "Nationality", value: "Filipino" },
  { label: "Languages", value: "Filipino, English" },
  { label: "Website", value: "rhonel.dev" },
];

// === Work Experience Data ===
const workExperience = [
  {
    role: "Freelance Developer",
    date: "2023 - Present",
    desc: "Built websites and small web apps for clients using modern technologies like React and Tailwind.",
  },
  {
    role: "Intern – Web Developer",
    date: "2022",
    desc: "Assisted in front-end development at a local startup. Helped refactor components, fixed bugs, and learned version control.",
  },
];

// === Skills Data ===
const skillsList = [
  {
    title: "Tech & Programming Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C++", "PHP", "MySQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Bootstrap", "Framer Motion", "ShadCN", "Laravel"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Visual Studio Code", "XAMPP", "Git", "GitHub", "Github Desktop", "Bitbucket", "Vercel"],
  },
  {
    title: "Design & Productivity",
    skills: ["Figma", "Canva", "Adobe Photoshop", "MS Word", "MS Powerpoint", "MS Excel"],
  },
  {
    title: "Information Technology",
    skills: ["Basic Hardware Installation & Troubleshooting", "Software Installation & Troubleshooting (Including OS Installation)",
      "Network Set Up & Configuration", "Console Debugging" ],
  },
  {
    title: "Other Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Adaptability",
      "Time Management",
    ],
  },
];

// === Main Component ===
const About: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-28 max-w-6xl mx-auto space-y-40 text-white">
      {/* === About Me === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple">
          About Me
        </h2>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
            {personalInfo.map(({ label, value }, index) => (
              <div
                key={label}
                className={`p-4 border-b border-r border-white/10 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <p className="text-sm text-white">{label}</p>
                <p className="text-base font-medium text-pink">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* === Education (Timeline Style) === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple">
          Education
        </h2>
        <div className="relative border-l-4 border-pink/40 pl-6 space-y-10">
          {/* Bachelor Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-muted p-4 rounded-xl shadow-lg"
          >
            <span className="absolute -left-[30px] top-3 w-4 h-4 bg-pink rounded-full border-4 border-background"></span>
            <h4 className="font-semibold text-pink">
              Bachelor of Science in Information Technology - Access Computer
              College
            </h4>
            <p className="text-sm text-white">Caloocan City</p>
            <p className="text-sm text-white/60">Year Graduated: 2025</p>
            <p className="text-sm mt-1">Graduated with high honors.</p>
          </motion.div>

          {/* High School */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-muted p-4 rounded-xl shadow-lg"
          >
            <span className="absolute -left-[30px] top-3 w-4 h-4 bg-pink rounded-full border-4 border-background"></span>
            <h4 className="font-semibold text-pink">
              High School Diploma - St. Therese of Rose School
            </h4>
            <p className="text-sm text-white">Caloocan City</p>
            <p className="text-sm text-white/60">Year Graduated: 2015</p>
            <p className="text-sm mt-1">Graduated with honors.</p>
          </motion.div>

          {/* Elementary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-muted p-4 rounded-xl shadow-lg"
          >
            <span className="absolute -left-[30px] top-3 w-4 h-4 bg-pink rounded-full border-4 border-background"></span>
            <h4 className="font-semibold text-pink">
              Elementary - Sampaguita Elementary School
            </h4>
            <p className="text-sm text-white">Caloocan City</p>
            <p className="text-sm text-white/60">Year Graduated: 2012</p>
            <p className="text-sm mt-1">Graduated with honors.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* === Certificates & Seminars === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple">
          Certificates & Seminars
        </h2>
        <ul className="space-y-4">
          <li className="bg-muted p-4 rounded-xl border-l-4 border-pink shadow-sm">
            <h4 className="font-semibold text-pink">
              NCII – Computer Systems Servicing (CSS)
            </h4>
            <p className="text-sm text-white/60">Issued by TESDA</p>
            <p className="text-sm mt-1">
              Certified in hardware servicing, software installation, and basic
              networking.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* === Work Experience (Timeline Style) === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple">
          Work Experience
        </h2>
        <div className="relative border-l-4 border-pink/40 pl-6 space-y-10">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-muted p-4 rounded-xl shadow-lg"
            >
              <span className="absolute -left-[30px] top-3 w-4 h-4 bg-pink rounded-full border-4 border-background"></span>
              <h4 className="text-xl font-semibold text-pink">{exp.role}</h4>
              <p className="text-sm text-white/60">{exp.date}</p>
              <p className="mt-2 text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* === Skills === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsList.map(({ title, skills }) => (
            <div key={title}>
              <h4 className="font-semibold text-lg text-pink mb-2">{title}</h4>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                   className="px-3 py-1 bg-base border border-pink/40 rounded-full text-sm text-white/80 hover:bg-pink hover:text-white transition-colors duration-300"


                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
