import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "SVIQ SOLUTION",
    period: "Jan 2025 - Present",
  },
  {
    role: "Jr. Software Engineer",
    company: "SVIQ SOLUTION",
    period: "Sept 2024 - Dec 2024",
  },
  {
    role: "Intern",
    company: "Dakshya Freondtech",
    period: "5 Months",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        Experience
      </motion.h2>

      <div className="relative border-l border-purple-500 mx-auto max-w-3xl space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-lg" />

            {/* Icon (Optional) */}
            <div className="absolute -left-[28px] top-0 bg-purple-600 p-1 rounded-full shadow-md">
              <Briefcase className="text-white w-4 h-4" />
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg hover:shadow-purple-500/30 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
