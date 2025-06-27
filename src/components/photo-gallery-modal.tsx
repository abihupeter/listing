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
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-white text-2xl font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Apartment ${idx + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
         {/* Footer */}
         <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
