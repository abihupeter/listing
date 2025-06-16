import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow duration-300">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="mb-4 font-bold text-gray-900 text-xl">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
