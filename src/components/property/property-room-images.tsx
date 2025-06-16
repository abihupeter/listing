"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertyRoomImages() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl">Room Images</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2">
        <div>
          <img
            src="/placeholder.svg?height=200&width=300&text=Bedroom"
            alt="Bedroom"
            className="rounded-xl w-full h-48 object-cover"
          />
          <p className="mt-2 font-medium">Bedroom</p>
        </div>
        <div>
          <img
            src="/placeholder.svg?height=200&width=300&text=Bathroom"
            alt="Bathroom"
            className="rounded-xl w-full h-48 object-cover"
          />
          <p className="mt-2 font-medium">Bathroom</p>
        </div>
      </div>
    </div>
  );
}