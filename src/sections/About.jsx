import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const summary = `Aspiring Web Developer with a strong foundation in JavaScript, React, NextJS, Tailwind, Redux, Firebase and modern UI libraries. Experienced in building production-level UI, ERP systems, dashboards, and AI-integrated applications. Passionate about intuitive UI, performance optimization, and modern frontend architecture.`

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="About Me" title="Who I Am" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-10 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <p className="text-slate-300 leading-relaxed text-lg">{summary}</p>
          <div className="absolute top-0 left-0 w-1 h-24 rounded-r bg-gradient-to-b from-cyan-400 to-blue-500" />
        </motion.div>
      </div>
    </section>
  )
}
