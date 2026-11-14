import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, as = 'div', ...props }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}
