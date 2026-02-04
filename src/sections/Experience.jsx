import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const experiences = [
  {
    role: 'Junior Frontend Developer',
    company: 'ABSS Software Company',
    period: '2025 - Present',
    description: 'Work with React, NextJS, Redux Toolkit, MUI, production apps, optimization, and AI tools.',
  },
  {
    role: 'Internship',
    company: 'Edutechs',
    period: 'Jan 2025 - July 2025',
    description: 'ERP project, Firestore, Supabase, Redux, AntD, Lodash.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Experience" title="Work Timeline" />
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 md:-translate-x-1/2" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0 md:flex md:items-center md:odd:flex-row-reverse"
            >
              <div className="md:w-1/2 md:px-8">
                <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/20 backdrop-blur-sm transition-colors md:odd:text-right">
                  <span className="text-cyan-400 font-mono text-sm">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white mt-1">{exp.role}</h3>
                  <p className="text-slate-400 font-medium mt-0.5">{exp.company}</p>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-[7px] md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 md:-translate-x-1/2 top-6 border-4 border-slate-950" />
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
