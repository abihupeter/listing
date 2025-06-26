"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Grid3X3, X } from "lucide-react"

interface PropertyImageGalleryProps {
  count?: number // Optional number of images
}

export function PropertyImageGallery({ count = 5 }: PropertyImageGalleryProps) {
  const [showModal, setShowModal] = useState(false)

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
            className="bg-black/50 rounded-l-xl w-full h-96 object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="gap-2 grid grid-cols-2 col-span-2 h-10">
          {images.slice(1, 5).map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Property view ${index + 2}`}
                className={`w-full h-47 object-cover bg-black/50 ${
                  index === 1 ? "rounded-tr-xl" : index === 3 ? "rounded-br-xl" : "rounded-md"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Button */}
      <div className="absolute bottom-0 right-0 z-10">
        <Button
          onClick={() => setShowModal(true)}
          variant="outline"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
        >
          <Grid3X3 className="mr-2 w-4 h-4" />
          Show all photos
        </Button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-grey bg-opacity-0.5 flex flex-col items-center justify-center px-4 py-8 bg-black/80">
          <div className="relative max-w-5xl w-full bg-white rounded-lg p-6 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4">All Photos</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-6 text-center">
              <Button
                onClick={() => setShowModal(false)}
                className="bg-gray-800 hover:bg-gray-700 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
