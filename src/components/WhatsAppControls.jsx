import { MessageCircle } from 'lucide-react'
import { PRODUCT } from '../data/product.js'
import WhatsAppLink from './WhatsAppLink.jsx'

export function FloatingWhatsApp({ quantity }) {
  return (
    <WhatsAppLink quantity={quantity} className="whatsapp-float" aria-label={`Chat with SHAMAZ on WhatsApp at ${PRODUCT.whatsappDisplay}`}>
      <MessageCircle size={21} strokeWidth={1.9} />
      <span className="whatsapp-float__label">{PRODUCT.whatsappDisplay}</span>
    </WhatsAppLink>
  )
}

export function MobileOrderBar({ quantity }) {
  return (
    <div className="mobile-order-bar">
      <div className="mobile-order-bar__price">
        <s>Rs. {PRODUCT.originalPrice.toLocaleString('en-IN')}</s>
        <strong>Rs. {PRODUCT.launchPrice.toLocaleString('en-IN')}</strong>
      </div>
      <WhatsAppLink quantity={quantity} className="button button--primary mobile-order-bar__button">
        Order on WhatsApp <span aria-hidden="true">↗</span>
      </WhatsAppLink>
    </div>
  )
}
