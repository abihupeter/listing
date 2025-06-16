import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto px-4 container">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8">
          {/* CTA Content */}
          <div className="lg:text-left text-center">
            <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Do you want us to manage your property?</h2>
            <p className="text-blue-100 text-lg">Do you have a property that you want managed or to rent out?</p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold text-white text-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
