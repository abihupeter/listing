import { FeatureCard } from "./feature-card"
import { Rocket, Building2, CreditCard } from "lucide-react"

const features = [
  {
    icon: (
      <div className="flex justify-center items-center bg-blue-600 rounded-full w-16 h-16">
        <Rocket className="w-8 h-8 text-white" />
      </div>
    ),
    title: "Trusted By Thousands",
    description:
      "We've earned the confidence of countless individuals and families on their journey to finding their ideal homes. Our commitment to excellence and customer satisfaction is the cornerstone of our success. Join the ranks of those who have placed their trust in us for all their real estate needs.",
  },
  {
    icon: (
      <div className="flex justify-center items-center bg-blue-200 rounded-full w-16 h-16">
        <Building2 className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Wide Range Of Properties",
    description:
      "We showcases a diverse selection of properties that cater to every tenant's taste and preference. Whether you're in search of a cozy apartment in the heart of the city, a spacious suburban family home, a serene countryside retreat, or a prime commercial space for your business, we have a wide array of options to choose from.",
  },
  {
    icon: (
      <div className="flex justify-center items-center bg-blue-200 rounded-full w-16 h-16">
        <CreditCard className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Financing Made Easy",
    description:
      "Securing the right financing for your property just got simpler with Alliance Realtors. Our team of experts ensures a hassle-free experience, offering personalized guidance, competitive rates, and complete transparency. With fast approvals and diverse financing options, we're your trusted partner on the path to property ownership.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">We provide full service at every step</p>
        </div>

        {/* Features Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
