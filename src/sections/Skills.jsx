import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'

const strong = [
  'JavaScript', 'React', 'NextJS', 'Tailwind', 'Redux', 'Firebase', 'Material UI',
]
const intermediate = [
  'MongoDB', 'Firestore', 'TypeScript', 'NodeJS', 'Shadcn', 'Ant Design',
]
const basic = [
  'Mongoose', 'Supabase', 'ExpressJS', 'MySQL', 'PostgreSQL', 'C++',
]

const skillEmoji = (name) => {
  const map = { JavaScript: '🟨', React: '⚛️', NextJS: '▲', Tailwind: '🎨', Redux: '📦', Firebase: '🔥', 'Material UI': '🧩', MongoDB: '🍃', Firestore: '📄', TypeScript: '🔷', NodeJS: '🟢', Shadcn: '🧩', 'Ant Design': '🐜', Mongoose: '🍃', Supabase: '🟢', ExpressJS: '⚡', MySQL: '🐬', PostgreSQL: '🐘', 'C++': '➕' }
  return map[name] || '•'
}

function SkillGrid({ items, level, startIndex }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((name, i) => (
        <SkillCard
          key={name}
          name={name}
          level={level}
          icon={() => <span className="text-2xl">{skillEmoji(name)}</span>}
          index={startIndex + i}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-925/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Skills" title="What I Work With" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">Strong</h3>
            <SkillGrid items={strong} level="Strong" startIndex={0} />
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Intermediate</h3>
            <SkillGrid items={intermediate} level="Intermediate" startIndex={strong.length} />
          </div>
          <div>
            <h3 className="text-slate-400 font-semibold text-sm uppercase tracking-wider mb-4">Basic</h3>
            <SkillGrid items={basic} level="Basic" startIndex={strong.length + intermediate.length} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
