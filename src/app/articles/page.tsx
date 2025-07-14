"use client";

import Image from "next/image";
import { ArticlesSection } from "@/components/articlessection/articles-section";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function WideRangePage() {
 return (
  <div className="bg-blue text-black">
    <Navbar isScrolled={true} />

    <main className="max-w-[1250px] mx-auto px-4 py-12 mt-10 flex gap-8">
      {/* Left vertical social media icons */}
      <div className="flex flex-col gap-4 pt-2 sticky top-90 h-fit">
        <Link href="https://facebook.com" target="_blank">
          <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <Image src="/images/linkedin.jpg" alt="LinkedIn" width={20} height={20} />
        </Link>
        <Link href="https://pinterest.com" target="_blank">
          <Image src="/images/pinterest.jpg" alt="Pinterest" width={20} height={20} />
        </Link>
        <Link href="#" target="_blank">
          <Image src="/images/share.jpg" alt="Share" width={20} height={20} />
        </Link>
      </div>

      {/* Right main content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">Wide Range of Properties</h1>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span>By <strong>Kodi</strong></span>
          <span>•</span>
          <span>30<sup>th</sup> June, 2025</span>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">House Hunting</span>
        </div>

        {/* Horizontal social icons (top) */}
        <div className="flex gap-4 mb-6 text-muted-foreground">
          <Link href="https://facebook.com" target="_blank">
            <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/images/linkedin.jpg" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="https://pinterest.com" target="_blank">
            <Image src="/images/pinterest.jpg" alt="Pinterest" width={20} height={20} />
          </Link>
          <Link href="#" target="_blank">
            <Image src="/images/share.jpg" alt="Share" width={20} height={20} />
          </Link>
        </div>

        <p className="text-xl text-muted-foreground mb-6">
          Let the magic of a bold, flavorful new era move you during this KAROL G–curated evening
        </p>

        <Image
          src="/images/property-banner.jpeg"
          alt="Featured property"
          width={1200}
          height={600}
          className="rounded-lg mb-8 w-full"
        />

        {/* Horizontal social icons (middle of page) 
        <div className="flex gap-4 mb-10 text-muted-foreground justify-center">
          <Link href="https://facebook.com" target="_blank">
            <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/images/linkedin.jpg" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="https://pinterest.com" target="_blank">
            <Image src="/images/pinterest.jpg" alt="Pinterest" width={20} height={20} />
          </Link>
          <Link href="#" target="_blank">
            <Image src="/images/share.jpg" alt="Share" width={20} height={20} />
          </Link>
        </div> */}

        <div className="space-y-6 text-base leading-7">
          <p>
            Global music icon KAROL G invites you to enter the bold, flavorful era of her new album
            “Tropicoqueta” during an unforgettable evening in Medellín, Colombia. Up to twenty-four
            eligible guests will step onto a vibrant local rooftop and fully immerse themselves in
            KAROL G’s world through a one-of-a-kind culinary journey featuring her favorite bites
            and drinks, personally curated by her.
          </p>

          <p>
            Throughout the experience, guests will also have a chance to embrace KAROL G’s bold and
            playful spirit, from selecting their very own body art to creating charm bracelets
            inspired by design elements from her album logo. To cap off the night, guests will be
            invited to find the beat that moves them through the rich sounds of instruments that
            echo her Latin roots, as one of KAROL G’s favorite orchestras plays songs from her new
            album “Tropicoqueta” and more.
          </p>

          <h2 className="text-lg font-semibold">About the experience</h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              From the moment they arrive up until the final farewell, this Airbnb Experience will
              have guests immersed in KAROL G’s world.
            </li>
            <li>
              Upon arrival, guests step onto a tropical rooftop oasis, surrounded by jungle plants
              and exotic florals. From the Pineapple Welcome Area, a piña colada inside a real
              pineapple will be served from an authentic Medellín tropical cart to welcome guests
              and set the mood, while sounds of “Tropicoqueta” set the vibe.
            </li>
            <li>
              Inside guests will find a Showgirl Sparkle Station, a private, tucked–away area where
              local body artists help guests bring out their inner glow with handpainted designs
              inspired by the album, from juicy coconuts to bright flowers, and enough glitter to
              sparkle all night long.
            </li>
            <li>
              At the Tropical Treasures Bar, guests can show off their style by designing
              one–of–a–kind charm bracelets using handpicked beads from local markets in Medellín,
              from mini guavas and pineapples to hearts and music notes and more, each bursting with
              color and meaning.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Relates Stories</h2>
          <ArticlesSection />
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
}
