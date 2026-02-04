import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-slate-500 text-sm">
          © {year} Md. Sakib Hasan. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/sakib-hasan23dev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
            LinkedIn
          </a>
          <a href="https://github.com/SakibHasan7439" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
