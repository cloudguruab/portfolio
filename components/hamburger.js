import Link from 'next/link'

export default function Hamburger() {
  return (
    <div className="inline-flex items-center px-2 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium">
      <Link href="/">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
