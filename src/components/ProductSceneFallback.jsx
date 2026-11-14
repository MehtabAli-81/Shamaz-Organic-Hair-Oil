import ImageWithFallback from './ImageWithFallback.jsx'

export default function ProductSceneFallback() {
  return (
    <div className="product-scene" aria-label="SHAMAZ product presentation">
      <div className="product-scene__wash" />
      <div className="scene-fallback">
        <div className="scene-fallback__halo" />
        <ImageWithFallback
          src="/images/product-hero.jpg"
          fallback="/images/bottle-front.jpg"
          alt="SHAMAZ 100 ml Hair Growth Oil bottle and sage-green box"
          className="scene-fallback__image"
          loading="eager"
        />
        <div className="scene-fallback__plinth" />
        <span className="scene-fallback__note">14 HERBS · 100 ML</span>
      </div>
      <div className="product-scene__caption">
        <span className="product-scene__caption-line" />
        <span>THE HERBAL HAIR RITUAL</span>
        <span className="product-scene__caption-line" />
      </div>
    </div>
  )
}
