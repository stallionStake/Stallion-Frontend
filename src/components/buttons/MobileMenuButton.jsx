import { useState } from "react";
import Link from "next/link";

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>

        <svg
          className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M18 12H6"></path>
        </svg>
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-50 bg-gray-600 w-1/2">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              type="button"
              className="absolute top-0 right-0 p-4 text-gray-400 hover:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="py-2 px-2 space-y-6">
              <div>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  onClick={closeMenu}
                >
                  Lobby
                </Link>
              </div>
              <div>
                <Link
                  href="/contests"
                  className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  onClick={closeMenu}
                >
                  My Contests
                </Link>
              </div>
              <div>
                <Link
                  href="/lineups"
                  className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  onClick={closeMenu}
                >
                  Lineups
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenuButton;
