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
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [loginStep, setLoginStep] = useState<"none" | "phone" | "password">("none");
  const [showSignupModal, setShowSignupModal] = useState(false);

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

  const validatePhone = (phone: string) => {
    return /^\+254\d{9}$/.test(phone);
  };

  const handlePhoneContinue = () => {
    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number in the format +254XXXXXXXXX.");
      return;
    }
    setError("");
    setLoginStep("password");
  };

  const handlePasswordContinue = () => {
    if (!password || password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }
    setIsSignedIn(true);
    resetAuthState();
  };

  const handleSignup = () => {
    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number in the format +254XXXXXXXXX.");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSignedIn(true);
    resetAuthState();
  };

  const resetAuthState = () => {
    setLoginStep("none");
    setShowSignupModal(false);
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const AuthButtons = () => (
    <>
      {/* <div className="my-4 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      
      <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 hover:bg-gray-100">
        <Image src="/images/google.jpg" alt="Google Icon" width={20} height={20} className="mr-2" />
        Continue with Google
      </button>

      <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100">
        <Image src="/images/apple.jpg" alt="Apple Icon" width={20} height={20} className="mr-2" />
        Continue with Apple
      </button> */}
    </>
  );

  const LoginModal = () => (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-xl relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={resetAuthState}>
          <X size={20} />
        </button>

        <h1 className="text-3xl font-bold text-[#0056ff] font-fonarto">Kodi</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome to Kodi</p>

        {loginStep === "phone" && (
          <>
            <h2 className="text-lg font-semibold mt-6">Log In </h2>
            <div className="mt-3">
              <label htmlFor="phone" className="text-sm text-gray-700 font-medium block mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254712345678"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>

            <button
              onClick={handlePhoneContinue}
              className="w-full mt-4 bg-[#0056ff] text-white py-2 rounded-md font-semibold"
            >
              Continue
            </button>

            <p className="text-sm mt-3 text-center">
              New to Kodi?{" "}
              <span
                onClick={() => {
                  resetAuthState();
                  setShowSignupModal(true);
                }}
                className="text-blue-600 font-medium cursor-pointer"
              >
                Create account
              </span>
            </p>

            <AuthButtons />
          </>
        )}

        {loginStep === "password" && (
          <>
            <h2 className="text-lg font-semibold mt-6">Enter your password</h2>
            <div className="mt-3">
              <label htmlFor="password" className="text-sm text-gray-700 font-medium block mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>

            <button
              onClick={handlePasswordContinue}
              className="w-full mt-4 bg-[#0056ff] text-white py-2 rounded-md font-semibold"
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );

  const SignupModal = () => (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-xl relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={resetAuthState}>
          <X size={20} />
        </button>

        <h1 className="text-3xl font-bold text-[#0056ff] font-fonarto">Kodi</h1>
        <p className="text-sm text-gray-600 mt-1">Create a Kodi Account</p>

        <div className="mt-4">
          <label htmlFor="signupPhone" className="text-sm text-gray-700 font-medium block mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="signupPhone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+254712345678"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signupPassword" className="text-sm text-gray-700 font-medium block mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="signupPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="confirmPassword" className="text-sm text-gray-700 font-medium block mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

        <button
          onClick={handleSignup}
          className="w-full mt-4 bg-[#0056ff] text-white py-2 rounded-md font-semibold"
        >
          Create Account and Log In
        </button>

        <AuthButtons />
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
            onClick={() => setLoginStep("phone")}
          >
            <LogIn className="w-4 h-4 text-white" />
            Sign In
          </Button>
        )}
      </div>

      {loginStep !== "none" && <LoginModal />}
      {showSignupModal && <SignupModal />}
    </>
  );
}
