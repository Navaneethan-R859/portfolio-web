export default function ContactPage() {
  return (
    <section className="py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6">
      {/* Heading */}
      <div className="max-w-2xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300">
          You can reach me at{" "}
          <a
            href="mailto:navaneethanct4@gmail.com"
            className="text-blue-500"
          >
            navaneethanct4@gmail.com
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          I'd love to hear from you! If you have any questions, comments, or feedback, 
          please use the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Enter your message"
          rows={6}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
