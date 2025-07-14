"use client";

import { ArticleCard } from "./article-card";
import Link from "next/link";

const articles = [
  {
    image: "/images/why_1.jpg",
    title: "Trusted By Thousands",
    description:
      "We've earned the confidence of countless individuals and families on their journey to finding their homes",
    author: {
      name: "Peter Mwangi",
      avatar: "/images/person_1.png",
    },
    date: "07 September 2023",
  },
  {
    image: "/images/why_2.jpg",
    title: "Wide Range Of Properties",
    description:
      "We showcases a diverse selection of properties that cater to every tenant's taste and preference.",
    author: {
      name: "Faith Mwende",
      avatar: "/images/person_2.png",
    },
    date: "09 August 2023",
  },
  {
    image: "/images/why_3.jpg",
    title: "Financing Made Easy",
    description:
      "Securing the right financing for your property just got simpler with Alliance Realtors.",
    author: {
      name: "Phylis Nyokabi",
      avatar: "/images/person_3.png",
    },
    date: "19 August 2023",
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container mt-0">
        {/* Section Header */}

        {/* Articles Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              href="/articles"
              key={index}
              className="transform transition duration-300 hover:scale-105"
            >
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
