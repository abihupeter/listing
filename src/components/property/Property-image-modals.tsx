/* eslint-disable @next/next/no-img-element */
"use client"

import { useRef, useState } from "react"
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
      <div className="z-[100] fixed inset-0 bg-white overflow-y-auto">
        {/* Modal Header */}
        <div className="top-0 z-10 sticky flex justify-between items-center bg-white px-4 py-4 border-b">
          <h2 className="font-bold text-lg">Photo tour</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Row */}
        <div className="flex space-x-4 px-4 py-4 border-b overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                const section = sectionRefs.current[idx];
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="flex-shrink-0 focus:outline-none w-28 text-center"
            >
              <img
                src={img.url}
                alt={`Thumbnail ${idx + 1}`}
                className="hover:shadow-lg border rounded-md w-28 h-20 object-cover hover:scale-105 transition-transform duration-200"
              />
              <span className="block mt-1 font-medium text-gray-600 text-xs hover:underline">
                {img.label}
              </span>
            </button>
          ))}
        </div>


        {/* Grouped Scrollable Sections */}
        <div className="space-y-10 px-4 py-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el
              }}
              className="flex sm:flex-row flex-col items-start sm:items-center gap-6 scroll-mt-20"
            >
              <h3 className="min-w-[120px] sm:min-w-[160px] font-semibold text-gray-800 text-base">
                {img.label}
              </h3>
              <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scroll-snap-x">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="flex-shrink-0 min-w-[250px] scroll-snap-align-start"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <img
                      src={img.url}
                      alt={`${img.label} ${n}`}
                      className="rounded-lg w-full h-48 object-cover cursor-zoom-in"
                      onClick={() => setZoomedImage(img.url)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <div className="py-6 border-t text-center">
          <Button onClick={onClose} className="bg-gray-800 hover:bg-gray-700 text-white">
            Close
          </Button>
        </div>
      </div>

      {/* Zoomed Image Viewer */}
      {zoomedImage && (
        <div
          className="z-[150] fixed inset-0 flex justify-center items-center bg-black/90"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="top-4 right-4 absolute bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="shadow-lg rounded-lg max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
