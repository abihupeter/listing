"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Grid3X3 } from "lucide-react"

interface PropertyImageGalleryProps {
  count?: number // Optional number of images
}

export function PropertyImageGallery({ count = 5 }: PropertyImageGalleryProps) {
  const images = useMemo(() => {
    return Array.from({ length: count }, (_, i) =>
      `https://kodinyumba.app/media/Stock/House/house${i + 1}.jpg`
    )
  }, [count])

  return (
    <div className="relative">
      <div className="gap-2 grid grid-cols-4 h-96">
        {/* Main Image */}
        <div className="col-span-2 row-span-2">
          <img
            src={images[0] || "/placeholder.svg"}
            alt="Property main view"
            className="bg-black/50 rounded-l-xl w-full h-full object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="gap-2 grid grid-cols-2 col-span-2 h-full">
          {images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Property view ${index + 2}`}
                className={`w-full h-full object-cover bg-black/50 ${
                  index === 1 ? "rounded-tr-xl" : index === 3 ? "rounded-br-xl" : "rounded-md"
                }`}
              />
              {index === 3 && (
                <div className="absolute inset-0 flex justify-center items-center bg-black/10 rounded-br-xl">
                  <Button variant="outline" className="bg-white hover:bg-gray-100 rounded-lg text-black">
                    <Grid3X3 className="mr-2 w-4 h-4" />
                    Show all photos
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
