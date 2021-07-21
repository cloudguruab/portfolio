import Link from "next/link";
import realadrianbx from "../public/realadrianbx.png";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between pt-3">
        <div className="flex-1 min-w-0">
          <Image src={realadrianbx} alt="@realadrianbx logo for portfolio." />
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link href="/">
             
            {/* connect to contact modal */}
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
      <h1> testing </h1>
    </div>
  );
}
