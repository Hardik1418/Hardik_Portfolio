import { motion } from "framer-motion";

const skills = [
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "MSSQL",
  "TailwindCSS",
  "Docker",
  "Git & GitHub",
  "Linux"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12"
      >
        Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-24 bg-white/10 text-white rounded-xl shadow-md backdrop-blur-md border border-white/10 text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
