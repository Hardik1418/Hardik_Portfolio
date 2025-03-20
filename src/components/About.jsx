import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="src/assets/profile.jpg" // Replace with your image path
              alt="Hardik Chavda"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-purple-500 group-hover:scale-105 transition-transform duration-500"
            />
            {/* Optional glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-500 z-[-1]" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a passionate{" "}
            <span className="text-purple-400 font-semibold">
              Software Engineer
            </span>{" "}
            with a knack for building exceptional digital experiences. My
            expertise lies in developing robust, scalable web applications using{" "}
            <span className="text-pink-400 font-semibold">ReactJS</span> and{" "}
            <span className="text-pink-400 font-semibold">NodeJS</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I love crafting user-centric, pixel-perfect designs and clean code.
            Whether it's front-end magic or back-end architecture, I focus on
            delivering high-quality, efficient, and impactful software
            solutions.
          </p>
          <a
            href="#projects"
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
