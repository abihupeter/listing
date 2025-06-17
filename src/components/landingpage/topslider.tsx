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
  "https://kodinyumba.app/media/Stock/hd/LandingPage/1.jpg?text=Modern+Villa+1",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/2.jpg?text=Luxury+Apartment+2",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/3.jpg?text=Beach+House+3",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/4.jpg?text=City+Penthouse+4",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/5.jpg?text=Garden+Home+5",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/6.jpg?text=Mountain+Retreat+6",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/7.jpg?text=Urban+Loft+7",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/8.jpg?text=Suburban+Bungalow+8",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/9.jpg?text=Lakeside+Cottage+9",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/10.jpg?text=Contemporary+Duplex+10",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/11.jpg?text=Executive+Townhouse+11",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/12.jpg?text=Country+Estate+12",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/13.jpg?text=Minimalist+Studio+13",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/14.jpg?text=Family+Mansion+14",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/15.jpg?text=Highrise+Apartment+15",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/16.jpg?text=Gated+Community+Home+16",
  "https://kodinyumba.app/media/Stock/hd/LandingPage/17.jpg?text=Scenic+Farmhouse+17"
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