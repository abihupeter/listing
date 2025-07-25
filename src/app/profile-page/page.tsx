"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { FavoritesGrid } from "@/components/property/favorites-grid";
import { BookingGrid } from "@/components/property/booking-grid";
import { ArrowLeft, Mail, Phone, ShieldCheck, Smartphone, Bell } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"about" | "favorites" | "bookings">("about");
  const [bookingTab, setBookingTab] = useState<"upcoming" | "all" | "past">("upcoming");

  const renderMainContent = () => {
    switch (activeTab) {
      case "favorites":
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-2 mt-6"> My Favorites</h2>
            <FavoritesGrid />
          </div>
        );

      case "bookings":
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-4 mt-5">My Bookings</h2>
            <div className="flex gap-4 mb-3 pb-2">
              {["upcoming", "all", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setBookingTab(tab as "upcoming" | "all" | "past")}
                  className={`capitalize text-sm font-medium px-6 py-2 rounded-md
                  ${bookingTab === tab
                      ? "text-blue-600 bg-gray-100"
                      : "text-black bg-gray-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <BookingGrid />
          </div>
        );

      case "about":
      default:
        return (
          <>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-semibold">About me</h2>
              <button className="bg-gray-100 text-sm px-4 py-1 rounded-md hover:bg-gray-200 transition">
                Edit
              </button>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[400px]">
              <div className="flex items-center text-center">
                <div className="flex flex-col items-center w-1/2">
                  <div className="relative">
                    <Image
                      src="/images/person_1.png"
                      alt="Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <span className="absolute bottom-0 right-0 bg-pink-500 text-white p-1 rounded-full text-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mt-2">Ed</h3>
                  <p className="text-xs text-gray-500">Nairobi, Kenya</p>
                </div>

                <div className="flex w-1/2 justify-center border-gray-200">
                  <div className="flex flex-col divide-y divide-gray-200 text-left w-full">
                    <div className="py-3">
                      <p className="font-bold text-lg">8</p>
                      <p className="text-sm text-gray-600">Bookings</p>
                    </div>
                    <div className="py-3">
                      <p className="font-bold text-lg">6</p>
                      <p className="text-sm text-gray-600">Favourites</p>
                    </div>
                    <div className="py-3">
                      <p className="font-bold text-lg">8</p>
                      <p className="text-sm text-gray-600">Years on Kodi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>Email: einganji@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <span>Phone: +254 700 402 788</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer underline">
                <ShieldCheck className="w-4 h-4" />
                <span>Identity verified</span>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block min-h-screen bg-white text-black px-4 md:px-16 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors px-2 py-1 rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <Link href="/">
              <h1 className="pl-3 font-fonarto text-5xl font-bold text-[#0056ff] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">
                Kodi
              </h1>
            </Link>
          </div>
          <Link href="/">
            <Image
              src="/images/person_1.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer hover:opacity-80 transition"
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 border-t pt-6 mt-1">
          <div className="col-span-1 w-full md:w-[30%] border-r pr-6 pl-15">
            <h2 className="text-3xl font-semibold mb-4">Profile</h2>
            <ul className="space-y-4">
              <li
                className={`pl-5 flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "about" ? "bg-gray-100" : ""
                  }`}
                onClick={() => setActiveTab("about")}
              >
                <Image src="/images/person_1.png" alt="Profile" width={40} height={40} className="rounded-full" />
                <span className="font-medium">About me</span>
              </li>
              <li
                className={`pl-5 flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "favorites" ? "bg-gray-100" : ""
                  }`}
                onClick={() => setActiveTab("favorites")}
              >
                <Image src="/images/favorites1.jpg" alt="Favorites" width={30} height={30} />
                <span className="font-medium">My Favorites</span>
              </li>
              <li
                className={`pl-5 flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === "bookings" ? "bg-gray-100" : ""
                  }`}
                onClick={() => setActiveTab("bookings")}
              >
                <Image src="/images/bookings1.jpg" alt="Bookings" width={30} height={30} />
                <span className="font-medium">My Bookings</span>
              </li>
            </ul>
          </div>

          <div className="col-span-3 w-full md:w-[70%] pl-20">{renderMainContent()}</div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden block px-4 pb-10">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <h1 className="font-fonarto text-3xl text-[#0056ff]">Kodi</h1>
          <Image
            src="/images/person_1.png"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <Bell className="w-5 h-5" />
        </div>

        <div className="mb-4">{renderMainContent()}</div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab("favorites")}
            className="bg-gray-100 p-4 rounded-xl flex flex-col items-center"
          >
            <Image src="/images/favorites1.jpg" alt="Favorites" width={40} height={40} />
            <span className="mt-2 text-sm">Favorites</span>
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className="bg-gray-100 p-4 rounded-xl flex flex-col items-center"
          >
            <Image src="/images/bookings1.jpg" alt="Bookings" width={40} height={40} />
            <span className="mt-2 text-sm">Bookings</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Modal on Mobile */}
      {(activeTab === "favorites" || activeTab === "bookings") && (
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <button onClick={() => setActiveTab("about")}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold">
              {activeTab === "favorites" ? "Favorites" : "Bookings"}
            </h2>
            <div />
          </div>
          <div className="p-4">{renderMainContent()}</div>
        </div>
      )}

      <Footer />
    </>
  );
}
