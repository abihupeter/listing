interface ServiceCardProps {
  image: string
  title: string
  className?: string
}

export function ServiceCard({ image, title, className = "" }: ServiceCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}>
      <div className="relative h-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />

        {/* Title overlay */}
        <div className="absolute inset-0 flex justify-center items-center p-6">
          <h3 className="font-bold text-white text-xl md:text-2xl lg:text-3xl text-center leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  )
}
