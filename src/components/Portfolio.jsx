import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Aura Finance App',
    category: 'UI/UX Design',
    description: 'A sleek personal finance dashboard that makes money management effortless.',
    color: '#1A1A2E',
    accent: '#E8C547',
    emoji: '💳',
    tags: ['Mobile', 'Fintech'],
    span: 'md:col-span-2',
  },
  {
    title: 'Bloom Cosmetics',
    category: 'Branding',
    description: 'Full brand identity for a sustainable beauty startup.',
    color: '#F4A5B0',
    accent: '#fff',
    emoji: '🌸',
    tags: ['Branding', 'Print'],
    span: '',
  },
  {
    title: 'Nova SaaS Platform',
    category: 'Web Development',
    description: 'React-based dashboard with real-time analytics and team collaboration.',
    color: '#6366F1',
    accent: '#E8C547',
    emoji: '🚀',
    tags: ['React', 'SaaS'],
    span: '',
  },
  {
    title: 'Terra Outdoors',
    category: 'Digital Marketing',
    description: '3x revenue growth through targeted content strategy and SEO overhaul.',
    color: '#064E3B',
    accent: '#34D399',
    emoji: '🏕️',
    tags: ['SEO', 'Content'],
    span: '',
  },
  {
    title: 'Pulse Health',
    category: 'UI/UX Design',
    description: 'Patient-first telemedicine app redesign improving booking by 60%.',
    color: '#1E3A5F',
    accent: '#60A5FA',
    emoji: '❤️',
    tags: ['Healthtech', 'Mobile'],
    span: '',
  },
  {
    title: 'Craft Coffee Co.',
    category: 'Branding & Web',
    description: 'A complete digital transformation for an artisan coffee chain.',
    color: '#3D1E0F',
    accent: '#E8C547',
    emoji: '☕',
    tags: ['Branding', 'E-Commerce'],
    span: 'md:col-span-2',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-24 bg-cream dark:bg-charcoal" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-muted dark:text-cream/60">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-cream">
              Work we're
              <br />
              <span className="italic">proud of.</span>
            </h2>
          </div>
          <p className="text-muted dark:text-cream/60 max-w-sm leading-relaxed">
            A selection of projects where we pushed creative boundaries and delivered real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card animate-on-scroll relative overflow-hidden rounded-2xl cursor-pointer group ${project.span}`}
              style={{ minHeight: '280px' }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: project.color }}
              />

              {/* Decorative circles */}
              <div
                className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{ backgroundColor: project.accent }}
              />
              <div
                className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: project.accent }}
              />

              {/* Emoji visual */}
              <div className="absolute top-6 right-6 text-5xl select-none">{project.emoji}</div>

              {/* Content */}
              <div className="relative p-7 h-full flex flex-col justify-end" style={{ minHeight: '280px' }}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${project.accent}25`,
                        color: project.accent,
                        border: `1px solid ${project.accent}40`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: project.accent }}>
                  {project.category}
                </p>

                <h3 className="font-display text-2xl font-bold text-white mb-2">{project.title}</h3>

                {/* Hover overlay content */}
                <div className="portfolio-overlay">
                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                  <button className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: project.accent }}>
                    View Case Study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <button className="border border-charcoal/30 dark:border-cream/30 text-charcoal dark:text-cream font-medium px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}