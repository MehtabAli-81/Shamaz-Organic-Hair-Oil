import { useEffect, useState } from 'react'

export default function ImageWithFallback({ src, fallback = '/images/product-hero.jpg', alt, className = '', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt || 'SHAMAZ product image unavailable'}>
        <span>SHAMAZ</span>
        <small>ORGANIC PRODUCT</small>
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback)
        else setFailed(true)
      }}
      {...props}
    />
  )
}
