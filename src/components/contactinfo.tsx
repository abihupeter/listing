interface ContactInfoProps {
  title: string
  address?: string
  poBox?: string
  phone?: string
  additionalPhone?: string
  supportCenter?: boolean
  location?: string
}

export function ContactInfo({
  title,
  address,
  poBox,
  phone,
  additionalPhone,
  supportCenter,
  location,
}: ContactInfoProps) {
  return (
    <div className="text-white">
      <h3 className="mb-4 font-bold text-lg">{title}</h3>
      <div className="space-y-2 text-sm">
        {address && <p>{address}</p>}
        {poBox && <p>{poBox}</p>}
        {phone && <p>Phone No: {phone}</p>}
        {additionalPhone && <p>{additionalPhone}</p>}
        {supportCenter && <p>Support Center</p>}
        {location && <p>{location}</p>}
      </div>
    </div>
  )
}
