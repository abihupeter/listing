"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Grid3X3, ChevronLeft, ChevronRight } from "lucide-react"
import { PropertyImageModal } from "./Property-image-modals"

interface PropertyImageGalleryProps {
  images?: string[]
  count?: number
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
      scrollRef.current.scrollTo({ left: index * width, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const index = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth)
      setCurrentIndex(index)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {showModal && <PropertyImageModal images={images} onClose={() => setShowModal(false)} />}

      {/* Desktop Grid */}
      <div className="relative">
        <div className="hidden sm:grid gap-2 grid-cols-4 h-96">
          <div className="col-span-2 row-span-2">
            <img
              src={images[0]?.url}
              alt="Main view"
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
            ref={scrollRef}
            className="flex overflow-x-auto scroll-snap-x scroll-smooth scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-full h-64 scroll-snap-align-start relative"
                style={{ scrollSnapAlign: "start" }}
              >
                <img src={img.url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
              </div>
            ))}
          </div>

          {currentIndex > 0 && (
            <button onClick={handlePrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1">
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {currentIndex < images.length - 1 && (
            <button onClick={handleNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1">
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Show all button */}
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
    </>
  )
}
