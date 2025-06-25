"use client";

export function ThingsToKnow() {
  const sections = [
    {
      title: "Property Rules",
      items: [
        "No pets allowed",
        "No Ownership transfer",
        "No students allowed",
        "No loud music past 10:00pm"
      ]
    },
    {
      title: "Safety",
      items: [
        "Gate closes at Midnight",
        "Visitors should be registered at the gate",
        "None residents are not allowed in the Laundry area"
      ]
    },
    {
      title: "Rental Policy",
      items: [
        "Deposits to be paid before occupying the house",
        "Deposits are returned only if the unit is still in good condition as it was before user occupied",
        "Payments to be done through paybill only, no cash allowed"
      ]
    }
  ];

  return (
    <div className="my-8 text-sm">
      <hr className="border-gray-300 mb-6" />
      <div className="px-1">
        <h3 className="text-lg font-semibold mb-4">Things To Know</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 mt-6" />
    </div>
  );
}
