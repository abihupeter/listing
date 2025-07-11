/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PropertyHeader({ router }: { router: any }) {
  return (
    <header className="bg-white border-b">
      <div className="mx-auto px-4 py-4 container">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()}
          className="hover:bg-gray-100 hover:text-black transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
            <button
            onClick={() => router.push("/")}
            className="font-fonarto font-bold text-[35px] text-blue-600 text-3xl hover:opacity-80 transition"
          >
            Kodi
          </button>
        </div>
      </div>
    </header>
  );
}