"use client";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-13 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 py-4 container">
        <div className="flex justify-center items-center">
          <div
            className={`font-[fonarto] text-4xl h-9 font-bold transition-colors duration-300 ${
              isScrolled ? "text-blue-600" : "text-blue-500"
            }`}
          >
            Kodi
          </div>
        </div>
      </div>
    </nav>
  );
}