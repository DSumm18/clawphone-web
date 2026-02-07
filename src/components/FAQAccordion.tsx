'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  defaultOpen?: number[]
}

export function FAQAccordion({ items, defaultOpen = [0] }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen)

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full py-6 flex items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-heading pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`accordion-content ${
              openItems.includes(index) ? 'open' : ''
            }`}
          >
            <div className="accordion-inner">
              <p className="pb-6 text-body leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
