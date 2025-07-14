"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { ProfileSidebar } from "@/components/ui/profile-sidebar";
import Link from "next/link";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="relative h-14 flex items-center justify-between container mx-auto px-4">
        {/* Centered Logo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className={`bg-white px-6 py-2 rounded-b-3xl ${
              isScrolled ? "shadow-md" : ""
            }`}
          >
         <Link href="/">
          <div className="text-blue-600 text-4xl font-bold font-fonarto cursor-pointer hover:text-blue-800">
            Kodi
          </div>
        </Link>

          </div>
        </div>

        {/* Profile Button on Right */}
        {isScrolled && (
          <div className="absolute top-2 right-4 flex items-center">
            <Button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
            >
              <User className="w-5 h-5 text-white" />
            </Button>

            <ProfileSidebar
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
