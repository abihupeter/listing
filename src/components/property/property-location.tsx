"use client";

export function PropertyLocation() {
  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Location</h3>
      <div className="overflow-hidden rounded-xl mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.856135156826!2d36.82194641531724!3d-1.2920651359951745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5ed5a27cd%3A0xe5a18760ea2237b2!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1719240600000!5m2!1sen!2ske"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 border-0"
        ></iframe>
      </div>
      <p className="text-gray-700">
        The property is located in a quiet neighborhood with easy access to
        shopping centers, restaurants, and public transportation.
      </p>
    </div>
  );
}
