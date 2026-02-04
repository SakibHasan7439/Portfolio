import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const contactInfo = [
  { label: 'Email', value: 'sakibhasan16h@gmail.com', href: 'mailto:sakibhasan16h@gmail.com' },
  { label: 'Phone', value: '+8801644078709', href: 'tel:+8801644078709' },
  { label: 'LinkedIn', value: 'sakib-hasan23dev', href: 'https://www.linkedin.com/in/sakib-hasan23dev' },
  { label: 'GitHub', value: 'SakibHasan7439', href: 'https://github.com/SakibHasan7439' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend - just prevent default
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-925/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Contact" title="Get In Touch" />
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-400">Dhaka, Bangladesh. Open to remote and local opportunities.</p>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
              >
                <span className="text-cyan-400 font-mono text-sm w-20">{item.label}</span>
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors truncate">{item.value}</span>
              </a>
            ))}
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
          >
            <label className="block mb-4">
              <span className="text-slate-400 text-sm block mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="Your name"
              />
            </label>
            <label className="block mb-4">
              <span className="text-slate-400 text-sm block mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="your@email.com"
              />
            </label>
            <label className="block mb-6">
              <span className="text-slate-400 text-sm block mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                placeholder="Your message"
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
