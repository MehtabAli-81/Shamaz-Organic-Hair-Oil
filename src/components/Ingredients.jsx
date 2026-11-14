import { useState } from 'react'
import { ArrowUpRight, Leaf } from 'lucide-react'
import { INGREDIENTS } from '../data/product.js'
import Reveal from './Reveal.jsx'

export default function Ingredients() {
  const [active, setActive] = useState('01')

  return (
    <section className="ingredients-section section-pad" id="ingredients" aria-labelledby="ingredients-title">
      <div className="ingredients-section__orb" aria-hidden="true" />
      <div className="page-wrap ingredients-layout">
        <div className="ingredients-intro">
          <Reveal>
            <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> THE BOTANICAL INDEX</p>
            <h2 id="ingredients-title">Fourteen herbs.<br /><em>One considered blend.</em></h2>
            <p className="ingredients-intro__copy">A richly layered formula brings cold-pressed oils and Ayurvedic herbs together in one simple hair-care ritual.</p>
            <div className="ingredient-count"><span>14</span><small>PLANT-LED<br />INGREDIENTS</small></div>
            <a href="#gallery" className="text-link text-link--light">See the packaging <ArrowUpRight size={15} /></a>
          </Reveal>
          <div className="ingredients-intro__ornament" aria-hidden="true"><Leaf size={82} strokeWidth={0.7} /><span>SHAMAZ · 100 ML</span></div>
        </div>

        <div className="ingredient-list" aria-label="14 botanical ingredients">
          {INGREDIENTS.map((ingredient, index) => {
            const selected = active === ingredient.number
            return (
              <Reveal key={ingredient.number} delay={Math.min(index * 0.025, 0.26)}>
                <button
                  className={`ingredient-row${selected ? ' ingredient-row--active' : ''}`}
                  type="button"
                  aria-expanded={selected}
                  onClick={() => setActive(selected ? '' : ingredient.number)}
                >
                  <span className="ingredient-row__number">{ingredient.number}</span>
                  <span className="ingredient-row__content">
                    <strong>{ingredient.name}</strong>
                    <span className="ingredient-row__note">{ingredient.note}</span>
                  </span>
                  <span className="ingredient-row__icon"><ArrowUpRight size={16} /></span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
      <div className="ingredients-section__marquee" aria-hidden="true"><span>ROOT · LENGTH · SHINE · ROOT · LENGTH · SHINE · </span></div>
    </section>
  )
}
