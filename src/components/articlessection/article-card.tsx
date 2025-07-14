/* eslint-disable @next/next/no-img-element */
interface ArticleCardProps {
  image: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  date: string
   tag?: string;
}

export function ArticleCard({
  image,
  title,
  description,
  author,
  date,
  tag,
}: ArticleCardProps) {

  function getTagColor(tag: string) {
  switch (tag.toLowerCase()) {
    case "house hunting":
      return "bg-green-600";
    case "valuation":
      return "bg-blue-600";
    case "validation":
      return "bg-red-500";
    default:
      return "bg-gray-600";
  }
}

  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300">
      {/* Article Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Tag badge */}
         {tag && (
          <span
            className={`absolute bottom-2 right-2 ${getTagColor(
              tag
            )} text-white text-xs font-semibold px-2 py-1 rounded`}
          >
            {tag}
          </span>
        )}
        </div>

      {/* Article Content */}
      <div className="p-6">
        <h3 className="mb-3 font-bold text-blue-600 text-xl">{title}</h3>
        <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>

        {/* Author Info */}
        <div className="flex items-center">
          <img
            src={author.avatar || "/placeholder.svg?height=40&width=40&text=Avatar"}
            alt={author.name}
            className="mr-3 rounded-full w-10 h-10"
          />
          <div>
            <p className="font-semibold text-gray-900">{author.name}</p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

