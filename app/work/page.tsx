"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Import images
import frontendImg from "@/public/portfolio.png";
import geoAppImg from "@/public/inventory.jpeg";
import photographyImg from "@/public/letter.png";
import uiuxImg from "@/public/emotion recognition.png";

export default function PortfolioPage() {
  const [darkMode] = useState(true);

  const projects = [
    {
      title: "Frontend project",
      category: "Web Design",
      image: frontendImg,
    },
    {
      title: "Java project",
      category: "Mobile App",
      image: geoAppImg,
    },
    {
      title: "Web project",
      category: "Web Design",
      image: photographyImg,
    },
    {
      title: "NN & DL Project",
      category: "Health Care",
      image: uiuxImg,
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Section Title */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="text-4xl font-bold mt-2 mb-4">Here is</h4>
        <h1 className="text-4xl font-bold mt-2 mb-4">My latest work</h1>
        <p
          className={`max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        {/* Projects Grid - Always 2 Columns on Tablet/Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="object-cover w-full h-60"
              />
              <div
                className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl flex flex-col ${
                  darkMode
                    ? "bg-gray-800 bg-opacity-60"
                    : "bg-white bg-opacity-60"
                } shadow-md backdrop-blur-sm`}
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          className="flex justify-center items-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: projects.length * 0.2,
          }}
        >
          
        </motion.div>
      </motion.section>
    </div>
  );
}
