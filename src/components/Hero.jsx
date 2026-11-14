import { lazy, Suspense } from 'react'
import { ArrowDown, ArrowRight, Check, Sparkles } from 'lucide-react'
import { PRODUCT } from '../data/product.js'
import ProductSceneFallback from './ProductSceneFallback.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

const ProductScene = lazy(() => import('./ProductScene.jsx'))
const quantities = [1, 2, 3]

export default function Hero({ quantity, setQuantity }) {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-section__grain" aria-hidden="true" />
      <div className="hero-layout page-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-copy__eyebrow"><span className="eyebrow__dot" /> HERBAL HAIRCARE, REIMAGINED</p>
          <h1 id="hero-title">Pure Herbal Power for <em>Stronger, Thicker,</em> Faster-Growing Hair.</h1>
          <p className="hero-copy__intro">Infused with 14 cold-pressed oils and Ayurvedic herbs — 100% chemical-free formula.</p>
          <div className="hero-copy__proof">
            <span><Check size={14} strokeWidth={2.4} /> 14 botanical ingredients</span>
            <span><Check size={14} strokeWidth={2.4} /> 100 ml hair ritual</span>
          </div>

          <div className="offer-card" aria-label="Limited launch offer">
            <div className="offer-card__topline">
              <span className="offer-card__label"><Sparkles size={14} /> LIMITED LAUNCH OFFER</span>
              <span className="offer-card__badge">{PRODUCT.discountLabel}</span>
            </div>
            <div className="offer-card__price-row">
              <span className="offer-card__old">Rs. {PRODUCT.originalPrice.toLocaleString('en-IN')}</span>
              <span className="offer-card__arrow" aria-hidden="true">→</span>
              <span className="offer-card__new">Rs. {PRODUCT.launchPrice.toLocaleString('en-IN')}</span>
              <span className="offer-card__save">Save Rs. {PRODUCT.savings}</span>
            </div>
            <div className="offer-card__bottom">
              <div className="quantity-picker" role="group" aria-label="Choose bottle quantity">
                {quantities.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`quantity-picker__option${quantity === value ? ' is-active' : ''}`}
                    aria-pressed={quantity === value}
                    onClick={() => setQuantity(value)}
                  >
                    {value} <span>{value === 1 ? 'Bottle' : 'Bottles'}</span>
                  </button>
                ))}
              </div>
              <p className="offer-card__total" aria-live="polite">Total <strong>Rs. {(quantity * PRODUCT.launchPrice).toLocaleString('en-IN')}</strong></p>
            </div>
          </div>

          <div className="hero-copy__actions">
            <WhatsAppLink quantity={quantity} className="button button--primary" showArrow>
              Order Now via WhatsApp
            </WhatsAppLink>
            <a href="#ingredients" className="text-link">Explore the 14 herbs <ArrowRight size={15} /></a>
          </div>
          <p className="hero-copy__micro">Secure your bottle through WhatsApp · <span>{PRODUCT.whatsappDisplay}</span></p>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__sun" aria-hidden="true" />
          <div className="hero-visual__top-note"><span>01</span><i /> BOTANICAL HAIR OIL</div>
          <Suspense fallback={<ProductSceneFallback />}><ProductScene /></Suspense>
          <div className="hero-visual__side-label"><span>01</span><i /> SHAMAZ · ORGANIC PRODUCT</div>
          <a className="hero-visual__scroll" href="#benefits" aria-label="Scroll to benefits">
            <span>SCROLL TO DISCOVER</span><ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="hero-section__bottomline page-wrap" aria-hidden="true">
        <span>BOTANICAL FORMULA</span><i /><span>ROOT TO TIP RITUAL</span><i /><span>100 ML · SHAMAZ</span>
      </div>
    </section>
  )
}
