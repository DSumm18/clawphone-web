import { Check } from 'lucide-react'
import { Button } from './Button'

interface PricingCardProps {
  tier: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
}

export function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText = 'Get Started',
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-card p-8 ${
        highlighted
          ? 'border-2 border-primary shadow-xl scale-[1.02]'
          : 'border border-gray-200'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-badge">
          Most Popular
        </span>
      )}

      <div className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">
        {tier}
      </div>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-heading">{price}</span>
        {period && <span className="text-muted">{period}</span>}
      </div>

      <p className="text-body mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-safety-safe flex-shrink-0 mt-0.5" />
            <span className="text-[15px] text-body">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="#"
        variant={highlighted ? 'primary' : 'secondary'}
        fullWidth
      >
        {ctaText}
      </Button>
    </div>
  )
}
