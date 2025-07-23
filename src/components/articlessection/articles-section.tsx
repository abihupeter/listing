// Path: abihupeter/listing/listing-a1787b3bfbcf882f91abb29c3114b401b3f9ad1d/src/components/articlessection/articles-section.tsx

"use client";

import { ArticleCard } from "./article-card";
import Link from "next/link";
import { useGetBlogsQuery } from "../../app/lib/apiSlice/blog/blogsSlice";

// Define the interface for the blog data received from the backend API
interface BlogApiResponse {
  id: string;
  blog: string; // Corresponds to blog.name
  description: string;
  long_description: string;
  category: string;
  user: string; // Corresponds to blog.user.full_name
  user_profile: string; // Corresponds to f"{scheme}://{current_site}/media/{blog.user.image}"
  created: string; // Corresponds to blog.updated_at
  blog_image: string; // Corresponds to image
}

// Define the interface for the transformed data that ArticleCard expects
interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  tag?: string;
}

export function ArticlesSection() {
  const {
    data: apiBlogs,
    isLoading,
    isError,
    error,
  } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-4 container text-center">
          <p className="text-gray-600 text-lg">Loading articles...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    console.error("Error fetching blog articles:", error);
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-4 container text-center">
          <p className="text-red-500 text-lg">
            Error loading articles. Please check the console for details.
          </p>
        </div>
      </section>
    );
  }

  // Transform the API data to match ArticleCardProps, explicitly typing 'blog'
  const articlesToDisplay: ArticleCardProps[] = (apiBlogs || []).map(
    (blog: BlogApiResponse) => ({
      image: blog.blog_image,
      title: blog.blog,
      description: blog.description,
      tag: blog.category,
      author: {
        name: blog.user,
        avatar: blog.user_profile,
      },
      date: new Date(blog.created).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    })
  );

  if (articlesToDisplay.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-4 container text-center">
          <p className="text-gray-600 text-lg">No articles found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container mt-0">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
            Latest Articles & Insights
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Stay informed with our expert advice and market trends.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Explicitly type 'article' and 'index' in the map function */}
          {articlesToDisplay.map((article: ArticleCardProps, index: number) => (
            <Link
              href="/articles"
              key={article.title + index}
              className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
