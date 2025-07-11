"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Grid3X3, ChevronLeft, ChevronRight, X } from "lucide-react"

interface PropertyImageGalleryProps {
  images?: string[];
  count?: number;
}

export function PropertyImageGallery({ images: propImages, count = 5 }: PropertyImageGalleryProps) {
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const imageLabels = ["Half bathroom", "Full kitchen", "Bedroom", "Living room", "Additional photos"]

  const images = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      label: imageLabels[i] || `Photo ${i + 1}`,
      url: `https://kodinyumba.app/media/Stock/House/house${i + 1}.jpg`,
    }))
  }, [count])

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      })
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const width = scrollContainer.offsetWidth
      const index = Math.round(scrollLeft / width)
      setCurrentIndex(index)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  return (
  <>
    {showModal ? (
      // Modal view
      <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold">Photo tour</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-600 hover:text-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Row */}
        <div className="flex overflow-x-auto space-x-4 px-4 py-4 border-b">
          {images.map((img, idx) => (
            <div key={idx} className="flex-shrink-0 text-center w-28">
              <img
                src={img.url}
                alt={`Thumbnail ${idx + 1}`}
                className="w-28 h-20 object-cover rounded-md border"
              />
              <p className="text-xs mt-1 text-gray-600">{img.label}</p>
            </div>
          ))}
        </div>

        {/* Large Images */}
         {/* Grouped Horizontal Scrollable Sections */}
          <div className="px-4 py-6 space-y-10">
            {images.map((img, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <h3 className="text-base font-semibold text-gray-800 min-w-[120px] sm:min-w-[160px]">
                  {img.label}
                </h3>
                <div className="flex overflow-x-auto gap-4 scroll-smooth scroll-snap-x w-full">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className="min-w-[250px] flex-shrink-0 scroll-snap-align-start"
                      style={{ scrollSnapAlign: "start" }}
                    >
                      <img
                        src={img.url}
                        alt={`${img.label} ${n}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        {/* Close Button */}
        <div className="text-center py-6 border-t">
          <Button
            onClick={() => setShowModal(false)}
            className="bg-gray-800 hover:bg-gray-700 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    ) : (
      
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden sm:grid gap-2 grid-cols-4 h-96">
          <div className="col-span-2 row-span-2">
            <img
              src={images[0]?.url || "/placeholder.svg"}
              alt="Property main view"
              className="bg-black/50 rounded-l-xl w-full h-96 object-cover"
            />
          </div>
          <div className="gap-2 grid grid-cols-2 col-span-2 h-10">
            {images.slice(1, 5).map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={`Property view ${index + 2}`}
                  className={`w-full h-47 object-cover bg-black/50 ${
                    index === 1 ? "rounded-tr-xl" : index === 3 ? "rounded-br-xl" : "rounded-md"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative">
          <div
            className="flex overflow-x-auto scroll-snap-x scroll-smooth scrollbar-hide"
            ref={scrollRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-full h-64 scroll-snap-align-start relative"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={img.url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {currentIndex < images.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Show All Photos Button */}
        <div className="absolute bottom-3 right-3 z-10 hidden sm:block">
          <Button
            onClick={() => setShowModal(true)}
            variant="outline"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
          >
            <Grid3X3 className="mr-2 w-4 h-4" />
            Show all photos
          </Button>
        </div>
      </div>
    )}
  </>
)
}
