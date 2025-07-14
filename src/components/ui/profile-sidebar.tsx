// components/profile/ProfileSidebar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut, LogIn, Heart, Star, X } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ isOpen, onClose }: ProfileSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
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

  const handleLogin = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSignedIn(true);
    setShowLoginModal(false);
    setEmail("");
    setError("");
  };

  const LoginModal = () => (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-xl relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={() => setShowLoginModal(false)}
        >
          <X size={20} />
        </button>

        <h1 className="text-3xl font-bold text-[#0056ff] font-fonarto">Kodi</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome to Kodi</p>

        <h2 className="text-lg font-semibold mt-6">Log In/ Sign Up</h2>

       <div className="mt-3">
          <label htmlFor="email" className="text-sm text-gray-700 font-medium block mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>


        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-[#0056ff] text-white py-2 rounded-md font-semibold"
        >
          Continue
        </button>

        <p className="text-sm mt-3 text-center">
          New to Kodi?{" "}
          <span className="text-blue-600 font-medium cursor-pointer">Create account</span>
        </p>

        <div className="my-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 hover:bg-gray-100">
          <Image
            src="/images/google.jpg"
            alt="Google Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Continue with Google
        </button>

        <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100">
          <Image
            src="/images/apple.jpg"
            alt="Apple Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Continue with Apple
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div
        ref={sidebarRef}
        className={clsx(
          "absolute top-12 right-1 bg-white shadow-lg rounded-lg w-64 p-4 border z-40",
          !isOpen && "hidden"
        )}
      >
        {isSignedIn ? (
          <>
            <Button
              variant="ghost"
              className="w-full justify-start mb-2 hover:bg-blue-300"
              onClick={() => {
                router.push("/profile-page");
                onClose();
              }}
            >
              <User className="w-4 h-4 mr-2" />
              My Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-2 hover:bg-blue-300"
              onClick={() => {
                router.push("/profile-page?tab=bookings");
                onClose();
              }}
            >
              <Star className="w-4 h-4 mr-2" />
              My Bookings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-4 hover:bg-blue-300"
              onClick={() => {
                router.push("/profile-page?tab=favorites");
                onClose();
              }}
            >
              <Heart className="w-4 h-4 mr-2" />
              My Favorites
            </Button>
            <Button
              variant="default"
              className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsSignedIn(false)}
            >
              <LogOut className="w-4 h-4 text-white" />
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            variant="default"
            className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setShowLoginModal(true)}
          >
            <LogIn className="w-4 h-4 text-white" />
            Sign In
          </Button>
        )}
      </div>

      {showLoginModal && <LoginModal />}
    </>
  );
}
