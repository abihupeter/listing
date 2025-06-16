"use client";

export function PropertyRules() {
  const rules = [
    "No smoking",
    "No pets allowed",
    "No parties or events",
    "Check-in after 2:00 PM",
    "Check-out before 11:00 AM",
    "Quiet hours from 10:00 PM to 7:00 AM"
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Property Rules</h3>
      <ul className="space-y-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="flex justify-center items-center bg-gray-100 mt-0.5 rounded-full w-5 h-5">
              <div className="bg-blue-600 rounded-full w-2 h-2"></div>
            </div>
            <span className="text-gray-700">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}