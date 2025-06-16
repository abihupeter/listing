"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/landingpage/hero-section";
import { FeaturedProperties } from "@/components/propertylisting/propertycarousel";
import { WhatWeOffer } from "@/components/landingpage/whatweoffer";
import { CitiesSection } from "@/components/citiessection/cities-section";
import { WhyChooseUs } from "@/components/landingpage/whychooseus";
import { ArticlesSection } from "@/components/articlessection/articles-section";
import { PartnersSection } from "@/components/landingpage/partners-section";
import { CTASection } from "@/components/landingpage/ctasection";
import { Footer } from "@/components/footer";

const propertyImages = [
  "/placeholder.svg?height=800&width=1200&text=Modern+Villa+1",
  "/placeholder.svg?height=800&width=1200&text=Luxury+Apartment+2",
  "/placeholder.svg?height=800&width=1200&text=Beach+House+3",
  "/placeholder.svg?height=800&width=1200&text=City+Penthouse+4",
  "/placeholder.svg?height=800&width=1200&text=Garden+Home+5",
  "/placeholder.svg?height=800&width=1200&text=Mountain+Retreat+6",
  "/placeholder.svg?height=800&width=1200&text=Urban+Loft+7",
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("rent");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <HeroSection 
        propertyImages={propertyImages}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <FeaturedProperties />
      <WhatWeOffer />
      <CitiesSection />
      <WhyChooseUs />
      <ArticlesSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}