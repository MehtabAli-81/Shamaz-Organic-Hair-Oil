import { ArrowDownRight } from 'lucide-react'
import { RITUAL_STEPS } from '../data/product.js'
import ImageWithFallback from './ImageWithFallback.jsx'
import Reveal from './Reveal.jsx'

export default function HowToUse() {
  return (
    <section className="ritual-section section-pad" id="ritual" aria-labelledby="ritual-title">
      <div className="page-wrap">
        <div className="ritual-heading">
          <Reveal>
            <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> YOUR WEEKLY HAIR RITUAL</p>
            <h2 id="ritual-title">Three steps.<br /><em>A little time for you.</em></h2>
          </Reveal>
          <Reveal delay={0.1} className="ritual-heading__aside">
            <p>Make room for a quiet moment. Keep it simple, from scalp to ends.</p>
            <span>THE SHAMAZ METHOD <ArrowDownRight size={17} /></span>
          </Reveal>
        </div>

        <div className="ritual-content">
          <div className="ritual-photo">
            <ImageWithFallback
              src="/images/bottle-back.jpg"
              fallback="/images/bottle-front.jpg"
              alt="SHAMAZ bottle back label showing ingredient details and usage tips"
              className="ritual-photo__image"
              loading="lazy"
            />
            <div className="ritual-photo__stamp"><span>YOUR</span><strong>3</strong><span>STEP RITUAL</span></div>
          </div>
          <div className="ritual-steps">
            {RITUAL_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <article className="ritual-step">
                  <span className="ritual-step__number">{step.number}</span>
                  <div className="ritual-step__main">
                    <span className="ritual-step__detail">{step.detail}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span className="ritual-step__arrow"><ArrowDownRight size={19} strokeWidth={1.5} /></span>
                </article>
              </Reveal>
            ))}
            <p className="ritual-note">A simple ritual. A gentler kind of consistency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
