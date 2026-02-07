import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'primary-inverse'
  size?: 'default' | 'large'
  className?: string
  fullWidth?: boolean
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'default',
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-button'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-transparent text-primary border-2 border-primary hover:bg-primary-light',
    'primary-inverse': 'bg-white text-primary hover:bg-gray-100',
  }
  
  const sizes = {
    default: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg',
  }
  
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={styles}>
      {children}
    </button>
  )
}
