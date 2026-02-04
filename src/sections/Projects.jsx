import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import placeholder from '../assets/placeholder.svg'

const projects = [
  {
    title: 'Health-Point (AI Healthcare App)',
    description: 'Role-based AI-integrated full stack healthcare platform. Worked on dashboard, landing sections, and main routes.',
    tech: ['NextJS', 'Mongoose', 'Tailwind'],
    liveUrl: 'https://healthpoint-center.vercel.app/',
    githubUrl: null,
    image: placeholder,
  },
  {
    title: 'Artifacts Tracker',
    description: 'Full-featured artifact and asset tracking application with real-time updates and organized workflows.',
    tech: ['React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://artifacts-tracker.web.app/',
    githubUrl: null,
    image: placeholder,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-925/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Projects" title="What I Built" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
