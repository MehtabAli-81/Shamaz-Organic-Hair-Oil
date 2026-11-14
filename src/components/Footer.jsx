import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react'
import { PRODUCT } from '../data/product.js'
import BrandMark from './BrandMark.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Footer({ quantity }) {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="site-footer__top">
          <div>
            <a href="#top" className="site-footer__brand"><BrandMark /></a>
            <p>Botanical care. A quieter kind of confidence.</p>
          </div>
          <div className="site-footer__contact">
            <span>ORDER DIRECTLY</span>
            <WhatsAppLink quantity={quantity} className="site-footer__number">{PRODUCT.whatsappDisplay} <ArrowUpRight size={15} /></WhatsAppLink>
            <small>WhatsApp · Pakistan</small>
          </div>
          <WhatsAppLink quantity={quantity} className="button button--light"><MessageCircle size={17} /> Talk to SHAMAZ</WhatsAppLink>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} SHAMAZ ORGANIC PRODUCT</span>
          <span>100 ML · HAIR GROWTH OIL</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}
