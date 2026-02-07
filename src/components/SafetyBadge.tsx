import { Check, AlertTriangle, X } from 'lucide-react'

interface SafetyBadgeProps {
  status: 'safe' | 'caution' | 'danger'
  size?: 'sm' | 'md'
}

const config = {
  safe: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    icon: Check,
    label: 'Safe',
  },
  caution: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    icon: AlertTriangle,
    label: 'Review',
  },
  danger: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    icon: X,
    label: 'Risk',
  },
}

export function SafetyBadge({ status, size = 'md' }: SafetyBadgeProps) {
  const { bg, text, icon: Icon, label } = config[status]
  
  const sizes = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
  }
  
  const iconSizes = {
    sm: 12,
    md: 16,
  }
  
  return (
    <span className={`inline-flex items-center font-semibold rounded-badge ${bg} ${text} ${sizes[size]}`}>
      <Icon size={iconSizes[size]} />
      <span>{label}</span>
    </span>
  )
}
