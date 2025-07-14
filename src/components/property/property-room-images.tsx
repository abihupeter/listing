/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PropertyImageModal } from "./Property-image-modals" 

export function PropertyRoomImages() {
  const imageData = [
    { label: "Half bathroom", url: "https://kodinyumba.app/media/Stock/House/house1.jpg" },
    { label: "Full kitchen", url: "https://kodinyumba.app/media/Stock/House/house2.jpg" },
    { label: "Bedroom", url: "https://kodinyumba.app/media/Stock/House/house3.jpg" },
    { label: "Living room", url: "https://kodinyumba.app/media/Stock/House/house4.jpg" },
    { label: "Additional photos", url: "https://kodinyumba.app/media/Stock/House/house5.jpg" },
    { label: "Exterior", url: "https://kodinyumba.app/media/Stock/House/house6.jpg" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const nextImages = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= imageData.length ? 0 : prev + 2
    )
  }

  const prevImages = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? imageData.length - 2 : prev - 2
    )
  }

  const currentImages = imageData.slice(currentIndex, currentIndex + 2)

  return (
    <>
      {/* Image Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl">Room Images</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full" onClick={prevImages}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" onClick={nextImages}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="gap-4 grid grid-cols-2">
          {currentImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setShowModal(true)}
              className="group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.label}
                className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <p className="mt-2 font-medium text-gray-700 group-hover:underline">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <PropertyImageModal
          images={imageData}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
