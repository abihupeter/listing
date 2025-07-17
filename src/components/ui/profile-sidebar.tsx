 "use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut, LogIn, Heart, Star, X } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useLoginUserMutation,useRegisterUserMutation } from "@/app/lib/apiSlice/auth/authSlice";//import
// import { useRegisterUserMutation } from "@/app/lib/apiSlice/auth/authSlice";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ isOpen, onClose }: ProfileSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [loginUser, { isLoading, error: loginError }] = useLoginUserMutation();//imported loginUser mutation
  const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();//imported registerUser mutation
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");

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

 const normalizePhoneNumber = (phone: string): string | null => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 9 && cleaned.startsWith('7')) {
    return `+254${cleaned}`;
  } else if (cleaned.length === 10 && cleaned.startsWith('07')) {
    return `+254${cleaned.substring(1)}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('254')) {
    return `+${cleaned}`;
  } else if (cleaned.length === 13 && cleaned.startsWith('+254')) {
    return cleaned;
  }

  return null;
};

  const validatePhone = (phone: string) => {
    const normalized = normalizePhoneNumber(phone);
    return normalized !== null;
  };

  const handlePhoneContinue = () => {
    if (!validatePhone(phone)) {
      setError("Please enter a valid Kenyan phone number (e.g., 0712345678, 712345678, 254712345678, or +254712345678)");
      return;
    }
    setError("");
    setLoginStep("password");
  };

  const handlePasswordContinue = async () => {
    if (!password || password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    try {
      const normalizedPhone = normalizePhoneNumber(phone);
      if (!normalizedPhone) {
        setError("Invalid phone number format");
        return;
      }

      const response = await loginUser({
        phone_number: phone,
        password: password
      }).unwrap();

      // If login is successful
      setIsSignedIn(true);
      resetAuthState();
    } catch (err: any) {
      // Handle error from the API
      setError(err.data?.message || "Login failed. Please check your credentials and try again.");
    }
  };

 const handleSignup = async () => {
  if (!validatePhone(phone)) {
    setError("Please enter a valid Kenyan phone number (e.g., 0712345678, 254712345678, etc.)");
    return;
  }

  if (!fullName || !email) {
    setError("Please enter your full name and email.");
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

  try {
    const normalizedPhone = normalizePhoneNumber(phone);
    if (!normalizedPhone) {
      setError("Invalid phone number format");
      return;
    }

    const response = await registerUser({
      phone_number: normalizedPhone,
      full_name: fullName,
      email,
      password
    }).unwrap();

    // If successful
    setIsSignedIn(true);
    resetAuthState();
  } catch (err: any) {
    setError(err.data?.message || "Registration failed. Please try again.");
  }
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
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 bg-gray-300 h-px" />
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-1 bg-gray-300 h-px" />
      </div>
      
      <button className="flex justify-center items-center hover:bg-gray-100 mb-3 py-2 border rounded-md w-full">
        <Image src="/images/google.jpg" alt="Google Icon" width={20} height={20} className="mr-2" />
        Continue with Google
      </button>

      <button className="flex justify-center items-center hover:bg-gray-100 py-2 border rounded-md w-full">
        <Image src="/images/apple.jpg" alt="Apple Icon" width={20} height={20} className="mr-2" />
        Continue with Apple
      </button>
    </>
  );

  const LoginModal = () => (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50" role="dialog" aria-modal="true">
      <div className="relative bg-white shadow-xl p-6 rounded-xl w-full max-w-sm">
        <button className="top-3 right-3 absolute text-gray-500 hover:text-black" onClick={resetAuthState}>
          <X size={20} />
        </button>

        <h1 className="font-fonarto font-bold text-[#0056ff] text-3xl">Kodi</h1>
        <p className="mt-1 text-gray-600 text-sm">Welcome to Kodi</p>

        {loginStep === "phone" && (
          <>
            <h2 className="mt-6 font-semibold text-lg">Log In </h2>
            <div className="mt-3">
              <label htmlFor="phone" className="block mb-1 font-medium text-gray-700 text-sm">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0712345678 or 254712345678"
                className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
              />
              {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
            </div>

            <button
              onClick={handlePhoneContinue}
              disabled={isLoading}
              className="bg-[#0056ff] disabled:opacity-50 mt-4 py-2 rounded-md w-full font-semibold text-white"
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>

            <p className="mt-3 text-sm text-center">
              New to Kodi?{" "}
              <span
                onClick={() => {
                  resetAuthState();
                  setShowSignupModal(true);
                }}
                className="font-medium text-blue-600 cursor-pointer hover:underline hover:text-blue-900"
              >
                Create account
              </span>
            </p>

            <AuthButtons />
          </>
        )}

        {loginStep === "password" && (
          <>
            <h2 className="mt-6 font-semibold text-lg">Enter your password</h2>
            <div className="mt-3">
              <label htmlFor="password" className="block mb-1 font-medium text-gray-700 text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
              />
              {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
            </div>

            <button
              onClick={handlePasswordContinue}
              disabled={isLoading}
              className="bg-[#0056ff] disabled:opacity-50 mt-4 py-2 rounded-md w-full font-semibold text-white"
            >
              {isLoading ? "Logging in..." : "Continue"}
            </button>
          </>
        )}
      </div>
    </div>
  );

  const SignupModal = () => (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/80" role="dialog" aria-modal="true">
      <div className="relative bg-white shadow-xl p-6 rounded-xl w-full max-w-sm">
        <button className="top-3 right-3 absolute text-gray-500 hover:text-black" onClick={resetAuthState}>
          <X size={20} />
        </button>

        <h1 className="font-fonarto font-bold text-[#0056ff] text-3xl">Kodi</h1>
        <p className="mt-1 text-gray-600 text-sm">Create a Kodi Account</p>

        <div className="mt-4">
          <label htmlFor="signupPhone" className="block mb-1 font-medium text-gray-700 text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="signupPhone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0712345678 or 254712345678"
            className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
          />
        </div>
        <div className="mt-4">
  <label htmlFor="fullName" className="block mb-1 font-medium text-gray-700 text-sm">
    Full Name <span className="text-red-500">*</span>
  </label>
  <input
    id="fullName"
    type="text"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
    placeholder="Full Name"
    className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
  />
</div>

<div className="mt-4">
  <label htmlFor="email" className="block mb-1 font-medium text-gray-700 text-sm">
    Email Address <span className="text-red-500">*</span>
  </label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email Address"
    className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
  />
</div>


        <div className="mt-4">
          <label htmlFor="signupPassword" className="block mb-1 font-medium text-gray-700 text-sm">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="signupPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700 text-sm">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat password"
            className="shadow-sm px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
          />
        </div>

        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleSignup}
          disabled={isLoading}
          className="bg-[#0056ff] disabled:opacity-50 mt-4 py-2 rounded-md w-full font-semibold text-white"
        >
          {isLoading ? "Creating account..." : "Create Account and Log In"}
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
          "top-12 right-1 z-40 absolute bg-white shadow-lg p-4 border rounded-lg w-64",
          !isOpen && "hidden"
        )}
      >
        {isSignedIn ? (
          <>
            <Button
              variant="ghost"
              className="justify-start hover:bg-blue-300 mb-2 w-full"
              onClick={() => {
                router.push("/profile-page");
                onClose();
              }}
            >
              <User className="mr-2 w-4 h-4" />
              My Profile
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-blue-300 mb-2 w-full"
              onClick={() => {
                router.push("/profile-page?tab=bookings");
                onClose();
              }}
            >
              <Star className="mr-2 w-4 h-4" />
              My Bookings
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-blue-300 mb-4 w-full"
              onClick={() => {
                router.push("/profile-page?tab=favorites");
                onClose();
              }}
            >
              <Heart className="mr-2 w-4 h-4" />
              My Favorites
            </Button>
            <Button
              variant="default"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 w-full text-white"
              onClick={() => setIsSignedIn(false)}
            >
              <LogOut className="w-4 h-4 text-white" />
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            variant="default"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 w-full text-white"
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