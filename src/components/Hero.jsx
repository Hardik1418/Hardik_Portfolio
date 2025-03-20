import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hardik Chavda
          </span>
        </h1>
        <span className="text-4xl font-semibold text-white">
          Software Engineer
        </span>

        <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
          A Passionate{" "}
          <span className="font-semibold text-primary">React / Node.js</span>{" "}
          expert in crafting seamless web experiences.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Connect To Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition duration-300"
          >
            My Projects
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10"
      ></motion.div>
    </section>
  );
}
