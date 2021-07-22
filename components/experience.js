export default function Experience() {
  return (
    <div className="relative bg-white" id="Experience">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Career Experience
            </h2>
            <h3 className="mt-2 mb-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Full Stack Development
            </h3>
            <h7 className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900">
              Software Engineer - United Therapeutics
            </h7>
            <p className="mt-5 text-lg text-gray-500">
              Worked collaboratively within cross functional team composed of
              Mechanical, Biomedical, and Software Engineers as a member of the
              Regenerative Medicine Team to help push R&D
            </p>

            <p className="mt-3 text-lg text-gray-500">
              Distilled high-level project
              requirements into user workflows and intuitive user interfaces
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Helped architect scalable solutions and performance test
              applications to find and eliminate bottlenecks
            </p>

            <h3 className="mt-2 mb-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Backend Development
            </h3>
            <h7 className="mt-3 leading-8 font-extrabold tracking-tight text-gray-900">
              Python Developer - CustomerHD
            </h7>
            <p className="mt-5 text-lg text-gray-500">
              Effectively utilize latest freameworks and open source packages to
              achieve desired functionality building out API's and server side
              systems/components for company
            </p>

            <p className="mt-3 mb-3 text-lg text-gray-500">
              Maintained high level of unit test coverage across projects to
              prevent feature regressions. Communicated with product management
              and customers on as needed basis.
            </p>

            <h7 className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900">
              Software Developer - Allstate Insurance Company
            </h7>
            <p className="mt-3 text-lg text-gray-500">
              Integrate git and azure devops pipeline for web application
            </p>

            <p className="mt-3 text-lg text-gray-500">
              Maintained and contributed to form generation for internal tools
              and applications involving big data using SQL & Tableau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
