import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/25',
  outline: 'border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10',
  ghost: 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50',
}

export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300'
  const combined = `${base} ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={props.download}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
