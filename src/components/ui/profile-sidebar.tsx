// components/profile/ProfileSidebar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut, LogIn, Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ isOpen, onClose }: ProfileSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className={clsx(
        "absolute top-12 right-1 bg-white shadow-lg rounded-lg w-64 p-4 border z-50 bg-black/50",
        !isOpen && "hidden"
      )}
    >
      {isSignedIn ? (
        <>
          <Button
            variant="ghost"
            className="w-full justify-start mb-2"
            onClick={() => {
              router.push("/not-found");
              onClose();
            }}
          >
            <User className="w-4 h-4 mr-2" />
            My Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start mb-2"
            onClick={() => {
              router.push("/not-found");
              onClose();
            }}
          >
            <Star className="w-4 h-4 mr-2" />
            My Bookings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start mb-4"
            onClick={() => {
              router.push("/not-found");
              onClose();
            }}
          >
            <Heart className="w-4 h-4 mr-2" />
            My Favorites
          </Button>
          <Button
            variant="default"
            className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsSignedIn(false)}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          variant="default"
          className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsSignedIn(true)}
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
      )}
    </div>
  );
}
