import { ContactInfo } from "./contactinfo"

export function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Kodi Logo */}
          <div className="lg:col-span-1">
            <div className="font-fonarto text-white text-[50px] font-bold text-4xl">Kodi</div>
          </div>

          {/* Head Offices - Nairobi */}
          <div className="lg:col-span-1">
            <ContactInfo
              title="Head Offices - Nairobi"
              address="Milimani Business Park,Milimani Rd"
              poBox="P.O. Box 17100 - 00100 Nairobi"
              phone="0740 313 529"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-slate-700 border-t">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="text-white text-sm"></div>
            <div className="text-white text-sm">
              <span className="underline">KSH</span>    ©2025 powered by Kodi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
