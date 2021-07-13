import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="home">
      <head className="header">
        <title>Adrian Brown</title>
        <meta
          name="Software Developer Portfolio site for Full Stack Developer - Adrian Brown"
          content="Hello, World! I am a frontend developer with a passion for learning. 
          I have a strong skill set in backend development, scaling cloud infrastructure, 
          graphic design, data analytics and quantitative programming."
        />
        {/* link */}
      </head>

      <main className="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="md:flex md:items-center md:justify-between pt-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Adrian Brown
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact
              </button>
            </div>
          </div>
          <h1> testing </h1>
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
