export default function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} aria-label="SHAMAZ Organic Product">
      <svg className="brand-mark__symbol" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 39V19M24 28c-8 0-13-5-14-12 7 0 13 3 14 12Zm0-7c1-7 7-12 14-12-1 7-6 12-14 12Z" />
        <path d="M17 39h14M19 43h10M24 6c2 2 3 4 3 6-2 1-4 1-6 0 0-2 1-4 3-6Z" />
        <circle cx="24" cy="25" r="20" />
      </svg>
      <span className="brand-mark__text">
        <strong>SHAMAZ</strong>
        {!compact && <small>ORGANIC PRODUCT</small>}
      </span>
    </span>
  )
}
