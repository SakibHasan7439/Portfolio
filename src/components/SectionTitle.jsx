import { motion } from 'framer-motion'

export default function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      {subtitle && (
        <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  )
}
