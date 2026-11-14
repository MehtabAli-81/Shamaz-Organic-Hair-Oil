import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import Ingredients from './components/Ingredients.jsx'
import ProductGallery from './components/ProductGallery.jsx'
import HowToUse from './components/HowToUse.jsx'
import OrderCalculator from './components/OrderCalculator.jsx'
import Footer from './components/Footer.jsx'
import { FloatingWhatsApp, MobileOrderBar } from './components/WhatsAppControls.jsx'

function BotanicalTicker() {
  return (
    <div className="botanical-ticker" aria-label="Botanical formula, root to tip ritual, 100 millilitres">
      <span>BOTANICAL FORMULA</span><i aria-hidden="true" /><span>ROOT TO TIP RITUAL</span><i aria-hidden="true" /><span>100 ML · SHAMAZ</span><i aria-hidden="true" /><span>BOTANICAL FORMULA</span>
    </div>
  )
}

export default function App() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="site-shell min-h-screen bg-[#FAF8F4] text-[#202720]">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation quantity={quantity} />
      <main id="main">
        <Hero quantity={quantity} setQuantity={setQuantity} />
        <BotanicalTicker />
        <Benefits quantity={quantity} />
        <Ingredients />
        <ProductGallery />
        <HowToUse />
        <OrderCalculator quantity={quantity} setQuantity={setQuantity} />
      </main>
      <Footer quantity={quantity} />
      <FloatingWhatsApp quantity={quantity} />
      <MobileOrderBar quantity={quantity} />
    </div>
  )
}
