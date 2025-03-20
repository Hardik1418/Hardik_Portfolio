import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center 
      backdrop-blur-lg bg-gradient-to-r from-[#0f172a]/70 via-[#1e293b]/70 to-[#0f172a]/70 border-b border-white/10 shadow-md"
    >
      {/* Logo */}
      {/* <a
        href="#home"
        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text cursor-pointer"
      >
        Hardik
      </a> */}

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm md:text-base font-medium text-white items-center">
        {navLinks.slice(0, navLinks.length - 1).map((link) => (
          <li key={link} className="group relative">
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-400 transition duration-300"
            >
              {link}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full" />
          </li>
        ))}

        {/* Download Resume Button */}
        <li>
          <a
            href="/Resume/resume.pdf"
            download="Hardik_Chavda_Resume.pdf"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
        </li>

        {/* Contact Button */}
        <li>
          {/* <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold"
          >
            Contact
          </a> */}
        </li>
      </ul>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] 
            py-8 space-y-6 md:hidden text-center shadow-lg border-t border-white/10"
          >
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-purple-400 text-lg font-medium transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}

            {/* Download Resume Button (Mobile) */}
            <li>
              <a
                href="/Resume/resume.pdf"
                download="Hardik_Chavda_Resume.pdf"
                onClick={() => setMenuOpen(false)} // Close menu after click
                className="inline-flex justify-center items-center border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full transition-all duration-300 text-lg font-semibold gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </li>

            {/* Contact Button (Mobile) */}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)} // Close menu after click
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold"
              >
                Contact
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
