export function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">Our Partners</h2>
          <p className="text-gray-600 text-lg mb-4">
            We only work with the best companies around the globe
          </p>

          {/* Clickable Partner Image */}
          <a
            href="https://alliancerealtorsltd.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/allianceRealtors.png"
              alt="Alliance Realtors"
              className="mx-auto h-20 object-contain hover:opacity-90 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
