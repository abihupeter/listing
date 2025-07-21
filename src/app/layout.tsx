"use client";
// import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  export const metadata: Metadata = {
//    title: "Kodi Nyumba Listing",
//    description: "Listing properties by Kodinyumba",
//  };

const store = makeStore();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonarto and Axiforma fonts */}
        <link
          href="https://fonts.cdnfonts.com/css/fonarto-xt"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/axiforma"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Provider store={store}>
          {children}
          </Provider>
      </body>
    </html>
  );
}
