"use client";

import { useState, useEffect, useMemo } from "react";
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

  const propertyImages = useMemo(() => {
    const urls = [];
    for (let i = 0; i < 17; i++) {
      urls.push(`https://kodinyumba.app/media/Stock/hd/LandingPage/${i + 1}.jpg`);
    }

    // Shuffle the images
    for (let i = urls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [urls[i], urls[j]] = [urls[j], urls[i]];
    }

    return urls;
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
     <div className="mt-12">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl text-center">Articles & Tips</h2>
          <h2 className="mx-auto max-w-3xl text-gray-600 text-lg text-center">Explore our curated collection of insightful articles and expert tips for all things real estate.</h2>
          <ArticlesSection />
        </div>
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
