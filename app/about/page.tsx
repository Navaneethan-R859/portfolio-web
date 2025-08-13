'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from '@/public/Img.jpg';
import vs from '@/public/image.png';
import git from '@/public/github.png';
import figma from '@/public/figma.png';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="grid md:grid-cols-2 gap-12 mt-10 items-center">
        {/* Profile Image with animation */}
        <aside className="flex justify-start" aria-label="Profile picture">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={profilePic}
              alt="Profile picture of Navaneethan"
              width={300}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>
        </aside>

        {/* Content */}
        <article>
          <header>
            <h3 className="text-center text-gray-500 dark:text-gray-400">Introduction</h3>
            <h1 className="text-center text-4xl font-bold mt-2 dark:text-white">About me</h1>
          </header>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>

          {/* Info Cards */}
          <section aria-label="Personal information" className="grid sm:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-4 text-center shadow-sm bg-white dark:bg-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-white">Languages</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                HTML, CSS, JavaScript<br />React Js, Next Js
              </p>
            </div>

            <div className="border rounded-lg p-4 text-center shadow-sm bg-white dark:bg-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                B.E in Computer Science
              </p>
            </div>

            <div className="border rounded-lg p-4 text-center shadow-sm bg-white dark:bg-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built more than 3 projects
              </p>
            </div>
          </section>

          {/* Tools */}
          <section aria-label="Tools I use" className="mt-8">
            <h3 className="font-semibold text-center text-gray-900 dark:text-white">Tools I use</h3>
            <div className="flex justify-center items-center gap-6 mt-5">
              <Image src={vs} alt="Visual Studio Code" width={40} height={40} className="rounded-lg" />
              <Image src={git} alt="GitHub" width={40} height={40} className="rounded-lg" />
              <Image src={figma} alt="Figma" width={40} height={40} className="rounded-lg" />
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
