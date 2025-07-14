"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {FavoritesGrid} from "@/components/property/favorites-grid";
import { BookingGrid } from "@/components/property/booking-grid";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"about" | "favorites" | "bookings">("about");
  const [isOpen, setIsOpen] = useState(true);
    const [bookingTab, setBookingTab] = useState<"all" | "upcoming" | "past">("all");

  const renderMainContent = () => {
    switch (activeTab) {
      case "favorites":
        return (
            <div>
            <h2 className="text-xl font-semibold mb-4">Favorites</h2>
            <FavoritesGrid />
            </div>
        );


      case "bookings":

            return (
                <div>
                <h2 className="text-xl font-semibold mb-4">Bookings</h2>

                {/* Booking Tabs */}
                <div className="flex gap-4 mb-6 border-b pb-2">
                    {["all", "upcoming", "past"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setBookingTab(tab as "all" | "upcoming" | "past")}
                        className={`capitalize text-sm font-medium pb-1 border-b-2 ${
                        bookingTab === tab
                            ? "text-blue-600 border-blue-600"
                            : "text-gray-500 border-transparent"
                        } hover:text-blue-600`}
                    >
                        {tab}
                    </button>
                    ))}
                </div>

                {/* Bookings Grid Placeholder — could be filtered later */}
                <BookingGrid />
                </div>
            );


      case "about":
      default:
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">About me</h2>
              <button className="px-4 py-1 text-sm border rounded-full hover:bg-gray-100">
                Edit
              </button>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">Ed</h3>
                <p className="text-sm text-gray-500">Nairobi, Kenya</p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <p className="font-bold text-lg">8</p>
                  <p className="text-sm text-gray-600">Bookings</p>
                </div>
                <div>
                  <p className="font-bold text-lg">6</p>
                  <p className="text-sm text-gray-600">Favourites</p>
                </div>
                <div>
                  <p className="font-bold text-lg">8</p>
                  <p className="text-sm text-gray-600">Years on Kodi</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>einganji@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+254 700 402 788</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer hover:underline">
                <ShieldCheck className="w-4 h-4" />
                <span>Identity verified</span>
            </div>
            </div>

          </>
        );
    }
  };

  return (
    <><div className="min-h-screen bg-white text-black px-4 md:px-16 py-8">
          <div className="flex items-center justify-between mb-10">
              {/* Kodi Logo */}
              <Link href="/">
                  <h1 className="font-fonarto text-4xl font-bold text-[#0056ff] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">
                      Kodi
                  </h1>
              </Link>

              {/* Profile Icon */}
              <Link href="/">
                  <Image
                      src="/images/profile.jpg"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer hover:opacity-80 transition" />
              </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="col-span-1">
                  <h2 className="text-xl font-semibold mb-4">Profile</h2>
                  <ul className="space-y-4">
                      <li
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "about" ? "bg-gray-100" : ""}`}
                          onClick={() => setActiveTab("about")}
                      >
                          <Image
                              src="/images/profile.jpg"
                              alt="Profile"
                              width={40}
                              height={40}
                              className="rounded-full" />
                          <span className="font-medium">About me</span>
                      </li>
                      <li
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "favorites" ? "bg-gray-100" : ""}`}
                          onClick={() => setActiveTab("favorites")}
                      >
                          <Image
                              src="/images/favorites.jpg"
                              alt="Favorites"
                              width={30}
                              height={30} />
                          <span className="font-medium">My Favorites</span>
                      </li>
                      <li
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "bookings" ? "bg-gray-100" : ""}`}
                          onClick={() => setActiveTab("bookings")}
                      >
                          <Image
                              src="/images/bookings.jpg"
                              alt="Bookings"
                              width={30}
                              height={30} />
                          <span className="font-medium">My Bookings</span>
                      </li>
                  </ul>
              </div>

              {/* Dynamic Content */}
              <div className="col-span-3">{renderMainContent()}</div>
          </div>

      </div><Footer /></>
  );
}
