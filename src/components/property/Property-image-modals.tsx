"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface PropertyImageModalProps {
  images: { label: string; url: string }[]
  onClose: () => void
}

export function PropertyImageModal({ images, onClose }: PropertyImageModalProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold">Photo tour</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
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
                className="w-28 h-20 object-cover rounded-md border hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer"
              />
              <button
                onClick={() => {
                  const section = sectionRefs.current[idx]
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="text-xs mt-1 text-gray-600 hover:underline font-medium focus:outline-none"
              >
                {img.label}
              </button>
            </div>
          ))}
        </div>

        {/* Grouped Scrollable Sections */}
        <div className="px-4 py-6 space-y-10">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 scroll-mt-20"
            >
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
                      className="w-full h-48 object-cover rounded-lg cursor-zoom-in"
                      onClick={() => setZoomedImage(img.url)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <div className="text-center py-6 border-t">
          <Button onClick={onClose} className="bg-gray-800 hover:bg-gray-700 text-white">
            Close
          </Button>
        </div>
      </div>

      {/* Zoomed Image Viewer */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[150] flex items-center justify-center"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
