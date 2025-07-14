/* eslint-disable @next/next/no-img-element */
"use client";

import { X } from "lucide-react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export function PhotoGalleryModal({
  isOpen,
  onClose,
  images,
}: PhotoGalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/80">
      <div className="relative bg-gray-800 p-6 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="top-4 right-4 absolute text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="mb-4 font-semibold text-white text-2xl">Photo Gallery</h2>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Apartment ${idx + 1}`}
              className="rounded-lg w-full h-40 object-cover"
            />
          ))}
        </div>
         {/* Footer */}
         <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
