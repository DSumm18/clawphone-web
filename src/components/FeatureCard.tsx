import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-card p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-heading mb-2">{title}</h3>
      <p className="text-body leading-relaxed">{description}</p>
    </div>
  )
}
