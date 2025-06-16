import { ArticleCard } from "./article-card"

const articles = [
  {
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Villa+Article",
    title: "Trusted By Thousands",
    description:
      "We've earned the confidence of countless individuals and families on their journey to finding their ideal homes",
    author: {
      name: "Peter Mwangi",
      avatar: "/placeholder.svg?height=40&width=40&text=PM",
    },
    date: "07 September 2023",
  },
  {
    image: "/placeholder.svg?height=300&width=400&text=Waterfront+Property",
    title: "Wide Range Of Properties",
    description: "We showcases a diverse selection of properties that cater to every tenant's taste and preference.",
    author: {
      name: "Faith Mwende",
      avatar: "/placeholder.svg?height=40&width=40&text=FM",
    },
    date: "09 August 2023",
  },
  {
    image: "/placeholder.svg?height=300&width=400&text=Modern+Interior",
    title: "Financing Made Easy",
    description: "Securing the right financing for your property just got simpler with Alliance Realtors.",
    author: {
      name: "Phylis Nyokabi",
      avatar: "/placeholder.svg?height=40&width=40&text=PN",
    },
    date: "19 August 2023",
  },
]

export function ArticlesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">Articles & Tips</h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Explore our curated collection of insightful articles and expert tips for all things real estate.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
