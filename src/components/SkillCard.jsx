import { motion } from 'framer-motion'

export default function SkillCard({ name, level, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 backdrop-blur-sm transition-colors"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
            <Icon />
          </span>
        )}
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-xs text-slate-400 mt-0.5">{level}</p>
        </div>
      </div>
    </motion.div>
  )
}
