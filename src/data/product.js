export const PRODUCT = {
  brand: 'SHAMAZ Organic Product',
  name: 'Organic Hair Growth Oil',
  size: '100 ml',
  originalPrice: 1200,
  launchPrice: 1000,
  savings: 200,
  discountLabel: '17% OFF',
  whatsappNumber: '923003023106',
  whatsappDisplay: '0300-3023106',
}

export const BENEFITS = [
  {
    number: '01',
    icon: 'sprout',
    title: 'Stops Hair Fall',
    description: 'A considered scalp-care ritual designed to support hair that looks fuller and feels more resilient.',
  },
  {
    number: '02',
    icon: 'pulse',
    title: 'Stimulates Scalp Circulation',
    description: 'Pair the herbal oil with a slow fingertip massage to make your weekly scalp ritual feel restorative.',
  },
  {
    number: '03',
    icon: 'flower',
    title: 'Repairs Split Ends',
    description: 'Smooth a small amount along the lengths and ends as part of a more intentional hair-care routine.',
  },
  {
    number: '04',
    icon: 'shine',
    title: 'Restores Natural Shine',
    description: 'A rich blend of botanical oils leaves hair with a soft, naturally luminous finish.',
  },
]

export const INGREDIENTS = [
  ['Coconut Oil', 'A nourishing plant-oil base for a rich scalp ritual.'],
  ['Argan Oil', 'A silky botanical oil traditionally used in hair care.'],
  ['Rosemary Essential Oil', 'A fragrant herbal note in the scalp-care blend.'],
  ['Castor Oil', 'A naturally rich oil that adds body to the formula.'],
  ['Vitamin E Oil', 'A vitamin-rich addition to the botanical blend.'],
  ['Olive Oil', 'A smooth, comforting oil for scalp and lengths.'],
  ['Aloe Vera Extract', 'A plant-derived extract that complements the oil blend.'],
  ['Bhringraj', 'A classic Ayurvedic herb included in the formula.'],
  ['Hibiscus', 'A floral botanical traditionally valued in hair rituals.'],
  ['Nettle Leaf', 'A leafy herb included among the 14 ingredients.'],
  ['Black Seeds (Kalonji)', 'A familiar seed in traditional herbal care.'],
  ['Nagarmotha Root Extract', 'A root extract that rounds out the herbal profile.'],
  ['Flaxseed Oil', 'A plant oil included for its soft, light finish.'],
  ['Fenugreek Seeds (Methi)', 'A time-honoured seed in botanical hair care.'],
].map(([name, note], index) => ({ number: String(index + 1).padStart(2, '0'), name, note }))

export const RITUAL_STEPS = [
  {
    number: '01',
    title: 'Massage into scalp',
    description: 'Part the hair and massage the oil into your scalp with slow, circular fingertip movements.',
    detail: 'SCALP FIRST',
  },
  {
    number: '02',
    title: 'Apply to hair ends',
    description: 'Smooth a little along the lengths and ends to help prevent split ends.',
    detail: 'LENGTHS & ENDS',
  },
  {
    number: '03',
    title: 'Leave overnight & wash',
    description: 'Leave overnight, then wash with a mild shampoo for a simple weekly ritual.',
    detail: 'OVERNIGHT RITUAL',
  },
]

export function createOrderMessage({ quantity = 1, name = '', city = '', address = '' } = {}) {
  const safeQuantity = Math.max(1, Math.min(3, Number(quantity) || 1))
  const fullAddress = [address.trim(), city.trim()].filter(Boolean).join(', ')
  return [
    'Assalam-o-Alaikum! I want to order SHAMAZ Organic Hair Growth Oil (100 ml) at the Launch Discount Price of Rs. 1,000.',
    `• Quantity: ${safeQuantity}`,
    `• Total Amount: Rs. ${(safeQuantity * PRODUCT.launchPrice).toLocaleString('en-IN')}`,
    `• Name: ${name.trim() || ''}`,
    `• Address: ${fullAddress}`,
  ].join('\n')
}

export function createWhatsAppUrl(order = {}) {
  return `https://wa.me/${PRODUCT.whatsappNumber}?text=${encodeURIComponent(createOrderMessage(order))}`
}
