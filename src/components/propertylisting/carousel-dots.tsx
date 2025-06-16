"use client"

interface CarouselDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

export function CarouselDots({ total, current, onDotClick }: CarouselDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            index === current ? "bg-blue-600" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
