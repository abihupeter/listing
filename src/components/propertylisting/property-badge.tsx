import type React from "react"
interface PropertyBadgeProps {
  children: React.ReactNode
  variant?: "featured" | "rent" | "sale" | "info"
  className?: string
}

export function PropertyBadge({ children, variant = "info", className = "" }: PropertyBadgeProps) {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded"

  const variantClasses = {
    featured: "bg-slate-800 text-white",
    rent: "bg-blue-600 text-white",
    sale: "bg-green-600 text-white",
    info: "bg-blue-600 text-white",
  }

  return <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>
}
