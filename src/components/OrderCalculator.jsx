import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from 'lucide-react'
import { PRODUCT, createWhatsAppUrl } from '../data/product.js'
import Reveal from './Reveal.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function OrderCalculator({ quantity, setQuantity }) {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const total = quantity * PRODUCT.launchPrice
  const orderUrl = useMemo(() => createWhatsAppUrl({ quantity, name, city, address }), [quantity, name, city, address])

  const handleOrder = (event) => {
    if (!name.trim() || !city.trim() || !address.trim()) {
      event.preventDefault()
      setError('Please add your name, city, and delivery address to continue.')
      return
    }
    setError('')
  }

  return (
    <section className="order-section section-pad" id="order" aria-labelledby="order-title">
      <div className="page-wrap order-layout">
        <div className="order-intro">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow__dot" /> YOUR SHAMAZ ORDER</p>
            <h2 id="order-title">Your next<br /><em>good-hair ritual.</em></h2>
            <p className="order-intro__copy">Choose your bottles and share the delivery details. We’ll carry the conversation forward on WhatsApp.</p>
            <div className="order-trust"><ShieldCheck size={19} /><span>Direct ordering<br /><small>No checkout account needed</small></span></div>
          </Reveal>
          <div className="order-intro__image">
            <ImageWithFallback src="/images/box-front.jpg" fallback="/images/product-hero.jpg" alt="Sage-green SHAMAZ Hair Growth Oil box" loading="lazy" />
            <span>SHAMAZ · 100 ML</span>
          </div>
        </div>

        <Reveal className="order-card" delay={0.08}>
          <div className="order-card__heading">
            <span className="order-card__step">ORDER DETAILS <b>01—04</b></span>
            <h3>Let’s get your bottle<br />on its way.</h3>
          </div>
          <div className="order-fields">
            <label className="form-field">
              <span>Full name</span>
              <input autoComplete="name" type="text" name="name" placeholder="How should we address you?" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(error && !name.trim())} />
            </label>
            <label className="form-field">
              <span>City</span>
              <input autoComplete="address-level2" type="text" name="city" placeholder="Your city" value={city} onChange={(event) => setCity(event.target.value)} aria-invalid={Boolean(error && !city.trim())} />
            </label>
            <label className="form-field form-field--full">
              <span>Delivery address</span>
              <textarea autoComplete="street-address" name="address" rows="2" placeholder="Street, area, and any helpful delivery details" value={address} onChange={(event) => setAddress(event.target.value)} aria-invalid={Boolean(error && !address.trim())} />
            </label>
          </div>

          <div className="order-quantity">
            <div><span>Quantity</span><small>Rs. {PRODUCT.launchPrice.toLocaleString('en-IN')} per bottle</small></div>
            <div className="stepper" aria-label="Select order quantity">
              <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <span aria-live="polite">{quantity}</span>
              <button type="button" aria-label="Increase quantity" disabled={quantity >= 3} onClick={() => setQuantity((value) => Math.min(3, value + 1))}>+</button>
            </div>
          </div>

          <div className="order-total">
            <span>Total at launch price</span>
            <strong aria-live="polite">Rs. {total.toLocaleString('en-IN')}</strong>
          </div>
          <div className="order-savings"><Check size={14} /> You save Rs. {(PRODUCT.savings * quantity).toLocaleString('en-IN')} on this order</div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <a
            className="button button--primary button--checkout"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOrder}
          >
            <MessageCircle size={18} /> Complete Order on WhatsApp <ArrowUpRight size={17} />
          </a>
          <p className="order-card__fineprint">You’ll confirm delivery and payment details directly in WhatsApp.</p>
        </Reveal>
      </div>
    </section>
  )
}
