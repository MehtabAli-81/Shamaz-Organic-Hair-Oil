import { ArrowUpRight } from 'lucide-react'
import { createWhatsAppUrl } from '../data/product.js'

export default function WhatsAppLink({ children, quantity = 1, className = '', showArrow = false, ...props }) {
  return (
    <a
      href={createWhatsAppUrl({ quantity })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      {showArrow && <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />}
    </a>
  )
}
