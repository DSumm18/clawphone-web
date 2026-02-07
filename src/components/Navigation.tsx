'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/security', label: 'Security' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-wide">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-heading">
            ClawPhone
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-muted hover:text-heading transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-semibold text-white bg-primary rounded-button hover:bg-primary-hover transition-colors"
            >
              Get ClawPhone
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-heading"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40">
          <div className="flex flex-col p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-lg font-medium text-heading border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-6 inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-primary rounded-button"
            >
              Get ClawPhone
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
