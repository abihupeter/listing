/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, User } from "lucide-react";
import { ProfileSidebar } from "../ui/profile-sidebar";
import { useState } from "react";

export function PropertyHeader({ router }: { router: any }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="mx-auto px-4 py-4 container">
        {/* Full header row */}
        <div className="flex justify-between items-center">
          {/* Left: Back button and Kodi logo */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="hover:bg-gray-100 hover:text-black transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </Button>

            <button
              onClick={() => router.push("/")}
              className="font-fonarto font-bold text-[35px] text-blue-600 text-3xl hover:opacity-80 transition"
            >
              Kodi
            </button>
          </div>

          {/* Right: Profile button */}
          <div className="relative flex items-center gap-3">
            <Button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
            >
              <User className="w-5 h-5 text-white" />
            </Button>

            {/* Profile Sidebar */}
            <ProfileSidebar
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
