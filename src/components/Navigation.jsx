import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

const links = [
  ['Benefits', '#benefits'],
  ['14 Herbs', '#ingredients'],
  ['How to Use', '#ritual'],
  ['Order Now', '#order'],
]

export default function Navigation({ quantity }) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="SHAMAZ home" onClick={closeMenu}>
          <BrandMark />
        </a>
        <nav className={`site-nav${open ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="site-nav__link" onClick={closeMenu}>{label}</a>
          ))}
          <WhatsAppLink quantity={quantity} className="button button--nav site-nav__mobile-cta">
            Order on WhatsApp
          </WhatsAppLink>
        </nav>
        <div className="site-header__actions">
          <WhatsAppLink quantity={quantity} className="button button--nav site-nav__desktop-cta">
            Order on WhatsApp <span className="button__arrow" aria-hidden="true">↗</span>
          </WhatsAppLink>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
