"use client";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-start">
          {/* Logo container with white background stuck to top */}
          <div
            className={`bg-white px-6 py-2 rounded-b-3xl ${
              isScrolled ? "shadow-md" : ""
            }`}
          >
            <div
              className="text-blue-600 text-4xl font-bold font-fonarto"
            >
              Kodi
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
