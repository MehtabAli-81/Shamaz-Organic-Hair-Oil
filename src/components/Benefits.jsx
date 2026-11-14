import { Flower2, Scissors, Sparkles, Sprout, Waves } from 'lucide-react'
import { BENEFITS } from '../data/product.js'
import Reveal from './Reveal.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

const icons = { sprout: Sprout, pulse: Waves, flower: Scissors, shine: Sparkles }

export default function Benefits({ quantity }) {
  return (
    <section className="benefits-section section-pad" id="benefits" aria-labelledby="benefits-title">
      <div className="page-wrap">
        <div className="section-heading section-heading--split">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow__dot" /> A CARE RITUAL, NOT A QUICK FIX</p>
            <h2 id="benefits-title">Good hair days<br /><em>begin at the root.</em></h2>
          </Reveal>
          <Reveal delay={0.12} className="section-heading__aside">
            <p>Four thoughtful ways to bring botanical care into your weekly routine—from scalp to ends.</p>
            <span className="section-heading__index">02 / BENEFITS</span>
          </Reveal>
        </div>

        <div className="benefit-grid">
          {BENEFITS.map((benefit, index) => {
            const Icon = icons[benefit.icon] || Flower2
            return (
              <Reveal key={benefit.number} delay={index * 0.08} className={`benefit-card benefit-card--${index + 1}`}>
                <div className="benefit-card__head"><span>{benefit.number}</span><Icon size={23} strokeWidth={1.35} /></div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="benefit-card__bottom"><span>THE SHAMAZ RITUAL</span><i /></div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="benefits-section__cta">
          <p>Make the ritual yours.</p>
          <WhatsAppLink quantity={quantity} className="button button--outline" showArrow>Order Now</WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
