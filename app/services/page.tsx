"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [darkMode, setDarkMode] = useState(true);

  const services = [
    {
      title: "Web design",
      description: "Web development is the process of building, programming...",
      icon: "🌐",
    },
    {
      title: "Mobile app",
      description:
        "Mobile app development involves creating software for mobile devices...",
      icon: "📱",
    },
    {
      title: "UI/UX design",
      description:
        "UI/UX design focuses on creating a seamless user experience...",
      icon: "🎨",
    },
    {
      title: "Graphics design",
      description:
        "Creative design solutions to enhance visual communication...",
      icon: "🖼️",
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors`}
    >
      {/* Services Section */}
      <section className="py-20 px-6 text-center">
        
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="text-lg text-gray-500">What I offer</h4>
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            As a front-end developer, I specialize in crafting intuitive
            interfaces and user experiences for web applications, utilizing
            technologies like HTML, CSS, JavaScript and Next.js. My work focuses
            on creating responsive, accessible, and visually engaging websites
            that bring design concepts to life.
          </p>
        </motion.div>

        {/* Cards Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // Delay between cards
              },
            },
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`border rounded-xl p-6 hover:shadow-lg transition ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>
              <a
                href="#"
                className="text-pink-500 mt-4 inline-block hover:underline"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
