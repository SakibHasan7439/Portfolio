import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const items = [
  { degree: 'Diploma in Computer Technology', period: '2019 - 2023' },
  { degree: 'BSc in CSE', period: 'Ongoing' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionTitle subtitle="Education" title="Academic Background" />
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <p className="text-cyan-400 font-mono text-sm mt-1">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
