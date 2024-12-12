import { useState } from "react";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState("English");

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale);
    setLocaleOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-white">Amatip</div>
        </div>

        {/* Center Section: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="relative text-sm text-white hover:text-gray-100 group"
          >
            Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#courses"
            className="relative text-sm text-white hover:text-gray-100 group"
          >
            Courses
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#videos"
            className="relative text-sm text-white hover:text-gray-100 group"
          >
            Videos
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#webinars"
            className="relative text-sm text-white hover:text-gray-100 group"
          >
            Webinars
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#certification"
            className="relative text-sm text-white hover:text-gray-100 group"
          >
            Certification
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Right Section: Utilities */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Locale */}
          <div className="relative">
            <button
              onClick={() => setLocaleOpen(!localeOpen)}
              className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center text-sm text-gray-700 hover:bg-gray-100 hover:shadow-lg"
            >
              {selectedLocale}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {localeOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-32">
                <button
                  onClick={() => handleLocaleChange("English")}
                  className="block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
                >
                  English
                </button>
                <button
                  onClick={() => handleLocaleChange("Spanish")}
                  className="block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
                >
                  Spanish
                </button>
                <button
                  onClick={() => handleLocaleChange("French")}
                  className="block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
                >
                  French
                </button>
              </div>
            )}
          </div>

          {/* Search */}
          <button className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center text-sm text-gray-700 hover:bg-gray-100 hover:shadow-lg">
            <span className="pr-1">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l5 5m-5-5a7 7 0 1110-10 7 7 0 01-10 10z"
              />
            </svg>
          </button>

          {/* Topics */}
          <button className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center text-sm text-gray-700 hover:bg-gray-100 hover:shadow-lg">
            <span className="pr-2">Topics</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Log In */}
          <a
            href="#login"
            className="text-sm text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md"
          >
            Log In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#home"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
          >
            Home
          </a>
          <a
            href="#courses"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
          >
            Courses
          </a>
          <a
            href="#videos"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
          >
            Videos
          </a>
          <a
            href="#webinars"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
          >
            Webinars
          </a>
          <a
            href="#certification"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-700"
          >
            Certification
          </a>
          <a
            href="#login"
            className="block bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
          >
            Log In
          </a>
        </div>
      )}
    </nav>
  );
}
