import Image from 'next/image'
import profilePic from '@/public/Img.jpg'

export default function HomePage() {
  return (
    <section className="text-center py-20">
      {/* Profile Image */}
      <Image
        src={profilePic}
        alt="Profile picture of Navaneethan R"
        className="rounded-full"
        width={100}
        height={100}
        priority
      />

      {/* Intro */}
      <p className="mt-4 text-lg">
        Hi! I'm <span className="font-semibold">Navaneethan R</span> 👋
      </p>

      {/* Headline */}
      <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
        Frontend Web Developer <br /> from Clover Technologies
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        I am a frontend developer from Coimbatore, India with 1 year of experience
        at Clover Technologies.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 justify-center">
        <a
          href="/contact"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Contact Me →
        </a>
        <a
          href="/resume.pdf"
          className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          My Resume 📄
        </a>
      </div>
    </section>
  )
}
