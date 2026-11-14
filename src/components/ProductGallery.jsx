import { ArrowUpRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback.jsx'
import Reveal from './Reveal.jsx'

const photos = [
  { src: '/images/product-hero.jpg', alt: 'SHAMAZ sage-green box and amber hair oil bottle together', title: 'The complete ritual', note: 'BOX + 100 ML OIL', layout: 'gallery-card--hero' },
  { src: '/images/bottle-front.jpg', alt: 'Front label of the SHAMAZ Organic Hair Growth Oil bottle', title: 'A closer look', note: 'BOTANICAL FRONT LABEL', layout: 'gallery-card--bottle' },
  { src: '/images/box-front.jpg', alt: 'SHAMAZ Organic Hair Growth Oil sage-green outer box', title: 'Thoughtfully packed', note: 'SAGE-GREEN CARTON', layout: 'gallery-card--box' },
  { src: '/images/bottle-back.jpg', alt: 'Back label on the SHAMAZ Hair Growth Oil bottle with ingredients and directions', title: 'Every detail, considered', note: 'INGREDIENTS + HOW TO USE', layout: 'gallery-card--back' },
]

export default function ProductGallery() {
  return (
    <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
      <div className="page-wrap">
        <div className="section-heading section-heading--split gallery-heading">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow__dot" /> THE STUDIO EDIT</p>
            <h2 id="gallery-title">Made to be seen.<br /><em>Made to be kept close.</em></h2>
          </Reveal>
          <Reveal delay={0.12} className="section-heading__aside">
            <p>Meet the sage-green packaging, amber bottle, and original label details behind the SHAMAZ ritual.</p>
            <a className="text-link" href="#order">Choose your bottle <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} className={`gallery-card ${photo.layout}`} delay={index * 0.06}>
              <div className="gallery-card__image-wrap">
                <ImageWithFallback src={photo.src} fallback={photo.src === '/images/product-hero.jpg' ? '/images/bottle-front.jpg' : '/images/product-hero.jpg'} alt={photo.alt} className="gallery-card__image" loading="lazy" />
                <span className="gallery-card__count">0{index + 1} / 04</span>
                <a className="gallery-card__open" href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${photo.title}`}><ArrowUpRight size={18} /></a>
              </div>
              <div className="gallery-card__caption"><div><h3>{photo.title}</h3><p>{photo.note}</p></div><span className="gallery-card__line" /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
