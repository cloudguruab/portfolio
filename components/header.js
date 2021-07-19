import Link from "next/link";
import Image from "next/image";
import Contact from "../components/contact";
import Hamburger from "../components/hamburger";
import realadrianbxsvg from "../public/realadrianbxsvg.svg";

export default function Header() {
  return (
    <div className="flex grid-cols-2 justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 h-20 w-20">
          <Image
            src={realadrianbxsvg}
            alt="@realadrianbx logo for portfolio."
            className="h-2 w-2"
          />
        </div>
      <div className="mt-3 md:mt-0 md:absolute md:top-3 md:right-5">
        <Hamburger />
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </div>
    </div>
  );
}
