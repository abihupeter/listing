
export function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
  {/* Kodi Logo */}
  <div className="lg:col-span-1">
    <div className="font-fonarto font-bold text-[80px] text-white text-5xl">
      Kodi
    </div>
  </div>

  {/* Spacer Columns */}
  <div className="hidden lg:block lg:col-span-2" />

  {/* Head Office & Products in same row, right-aligned with spacing */}
  <div className="lg:col-span-2 flex justify-end pr-10">
    <div className="flex flex-col sm:flex-row gap-x-12 text-white">
      {/* Head Offices - Nairobi */}
      <div>
        <h4 className="mb-2 font-semibold text-lg text-xl ">Head Offices - Nairobi</h4>

        <a
          href="https://www.google.com/maps/place/Milimani+Business+Park/@-1.2888301,36.7996954,17z/data=!3m1!4b1!4m6!3m5!1s0x182f11003b46a357:0xfc242a2b1ceb36a2!8m2!3d-1.2888301!4d36.8022703!16s%2Fg%2F11vxy07gv1?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          Milimani Business Park, 
          <p className="mt-2"> Milimani Rd</p>
        </a>

        <p className="mt-2">P.O. Box 17100 - 00100 </p>
        <p className="mt-2"> Nairobi</p>

        <a href="tel:+254740313529" className="block mt-2 hover:underline">
          Phone No: 0740 313 529
        </a>
      </div>

      {/* Products Section */}
      <div>
        <h4 className="mb-2 font-semibold text-lg text-xl">Products</h4>

        <a
          href="https://kodinyumba.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          Kodi Landlord
        </a>

        <a
          href="https://kodinyumba.com/#/tenant"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1 hover:underline"
        >
          Kodi Tenant
        </a>
      </div>
    </div>
  </div>
</div>




        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-slate-700 border-t">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="text-white text-sm"></div>
            <div className="text-white text-sm">
              <span className="underline">KSH</span> ©2025 powered by Kodi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
