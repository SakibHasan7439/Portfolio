import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import resumePdf from '../assets/Sakib Hasan.pdf'

const roles = [
  'Junior Frontend Developer',
  'React & Next.js Developer',
  'Redux & Firebase Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(current.slice(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 font-mono text-sm md:text-base mb-4"
        >
          Hi, I&apos;m
        </motion.p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Md. Sakib Hasan
        </h1>
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 md:h-8 bg-cyan-400 ml-0.5 align-middle"
            />
          </span>
        </div>
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10">
          Dhaka, Bangladesh · Building production-ready UIs & modern web applications
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">Contact Me</Button>
          <Button
            href={resumePdf}
            download="Sakib-Hasan-Resume.pdf"
            variant="outline"
            className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
