"use client";

import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

export function PropertyActionButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-lg">
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-lg">
        <Heart className="w-4 h-4" />
        Save
      </Button>
    </div>
  );
}