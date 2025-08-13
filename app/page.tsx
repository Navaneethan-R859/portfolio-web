import Image from 'next/image'
import profilePic from '@/public/Img.jpg'

export default function HomePage() {
  return (
    <section className="text-center py-12 sm:py-16 md:py-20 px-4">
      {/* Profile Image */}
      <div className="flex justify-center">
        <Image
          src={profilePic}
          alt="Profile picture of Navaneethan R"
          className="rounded-full object-cover"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Intro */}
      <p className="mt-4 text-base sm:text-lg">
        Hi! I'm <span className="font-semibold">Navaneethan R</span> 👋
      </p>

      {/* Headline */}
      <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
        Frontend Web Developer <br className="hidden sm:block" /> from Coimbatore
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
        I am a frontend developer from Coimbatore, India with a year of experience and currently working at Clover Technologies. 
        I specialize in creating beautiful, responsive, and user-friendly web applications using modern technologies like React and Next.js.
        
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full hover:opacity-90 transition text-sm sm:text-base"
        >
          Contact Me →
        </a>
        <a
          href="/resume.pdf"
          className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm sm:text-base"
        >
          My Resume 📄
        </a>
      </div>
    </section>
  )
}
