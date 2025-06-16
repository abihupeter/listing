import { ContactInfo } from "./contactinfo"

export function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Kodi Logo */}
          <div className="lg:col-span-1">
            <div className="font-bold text-white text-4xl">Kodi</div>
          </div>

          {/* Head Offices - Nairobi */}
          <div className="lg:col-span-1">
            <ContactInfo
              title="Head Offices - Nairobi"
              address="Salama House, Mama Ngina Street, Wabeera Street Junction"
              poBox="P.O. Box 17100 - 00100 Nairobi"
              phone="0715 37 55 70"
            />
          </div>

          {/* Embakasi Area Branch */}
          <div className="lg:col-span-1">
            <ContactInfo
              title="Embakasi Area Branch"
              address="Fedha Service Station Plaza, Ground Flr"
              poBox="P.O. Box 17100 - 00100 Nairobi"
              phone="0701 40 44 40"
              supportCenter={true}
            />
          </div>

          {/* Kiambu Area Branch */}
          <div className="lg:col-span-1">
            <ContactInfo
              title="Kiambu Area Branch"
              address="Feruzi Towers, 2nd Flr"
              poBox="P.O. Box 17100 - 00100 Nairobi"
              phone="0757 35 55 57"
              additionalPhone="+254712345678"
            />
          </div>

          {/* Diaspora Liason */}
          <div className="lg:col-span-1">
            <ContactInfo
              title="Diaspora Liason"
              phone="+1 84-995-7841"
              location="Philadelphia, USA"
              additionalPhone="+254712345678"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-slate-700 border-t">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="text-white text-sm">KSH</div>
            <div className="text-white text-sm">© 2023 powered by Kodi. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
