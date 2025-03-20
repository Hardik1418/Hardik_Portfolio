import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VizTrack (Visitor Management System)",
    desc: "A smart Visitor Management System built with React & NodeJS, streamlining check-ins, enhancing security, and improving visitor experiences. Key features: WhatsApp notifications, live image capture, QR code check-ins, and real-time visitor monitoring.",
    image: "src/assets/viztrack.jpeg",
    link: "#",
  },
  {
    title: "TeaFloor (Chai Coffee Management)",
    desc: "A dynamic Chai & Coffee Management System using React and Node.js, enabling cafes and stalls to track daily sales in real-time, automate monthly billing, and manage operations with ease.",
    image:
      "https://www.shutterstock.com/image-photo/indian-masala-chai-spice-tea-600nw-2044312094.jpg",
    link: "#",
  },
  {
    title: "SYNKRON - CLOVER INTEGRATION (Internship)",
    desc: ` Synkron makes multi-channel inventory management easy by automatically synchronizing your
 inventory across all sales channels and keeps track of every unit efficiently.
 Effortlessly Sync your Inventory with Inventory Management Software
 Features added: Auto Sync, Inventory History, Inventory Analytics, Source of truth, Never Oversell 
Tools: JDK 11, Spring boot`,
    image: "src/assets/Ecommerce-Inventory-Management.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-purple-500/20 transition duration-300"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

              {/* Button */}
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-fit text-sm text-white font-medium px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
