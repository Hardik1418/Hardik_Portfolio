import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react"; // optional: icons library

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-10"
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Contact Me
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Let's build something amazing together! Whether you have an idea, a
          project, or just want to say hi—I'm always open to connecting.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Email */}
          <motion.a
            href="mailto:hardikchavda149h.c@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2 bg-white/10 hover:bg-purple-500/20 transition-colors p-6 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer"
          >
            <Mail className="text-purple-400 w-8 h-8" />
            <span className="text-sm text-gray-300 hover:text-purple-400 transition">
              Email
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/hardik-chavda-795111259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2 bg-white/10 hover:bg-purple-500/20 transition-colors p-6 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer"
          >
            <Linkedin className="text-purple-400 w-8 h-8" />
            <span className="text-sm text-gray-300 hover:text-purple-400 transition">
              LinkedIn
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/hardikchavda149"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2 bg-white/10 hover:bg-purple-500/20 transition-colors p-6 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer"
          >
            <Github className="text-purple-400 w-8 h-8" />
            <span className="text-sm text-gray-300 hover:text-purple-400 transition">
              GitHub
            </span>
          </motion.a>
        </div>

        {/* Call-to-action button */}
        <a
          href="mailto:hardikchavda149h.c@gmail.com"
          className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Say Hello!
        </a>
      </motion.div>
    </section>
  );
}
