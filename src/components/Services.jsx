import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    number: '01',
    title: 'UI/UX Design',
    description:
      'We design intuitive, beautiful interfaces that users love. From wireframes to polished prototypes, every interaction is purposeful.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    number: '02',
    title: 'Web Development',
    description:
      'We build fast, scalable, and accessible web applications using modern technologies. Clean code, outstanding performance.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    number: '03',
    title: 'Branding',
    description:
      'We craft distinctive brand identities — logos, color systems, and visual languages — that make your business instantly recognizable.',
    tags: ['Identity', 'Logo Design', 'Style Guide'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    number: '04',
    title: 'Digital Marketing',
    description:
      'We grow your digital presence with data-driven strategies — SEO, social media, content marketing, and performance campaigns.',
    tags: ['SEO', 'Social Media', 'Analytics'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
    <section id="services" className="py-24 bg-white dark:bg-ink" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-muted dark:text-cream/60">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-cream">
              Services built
              <br />
              <span className="italic">for impact.</span>
            </h2>
          </div>
          <p className="text-muted dark:text-cream/60 max-w-sm leading-relaxed">
            Every service is tailored to your unique goals — from brand-new startups to established enterprises.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll card-hover group relative bg-cream dark:bg-charcoal rounded-2xl p-8 border border-charcoal/8 dark:border-cream/8 cursor-default overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-display text-6xl font-bold text-charcoal/5 dark:text-cream/5 select-none">
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-charcoal dark:bg-accent flex items-center justify-center mb-6 text-cream dark:text-charcoal group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-charcoal dark:text-cream mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted dark:text-cream/60 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-charcoal/8 dark:bg-cream/10 text-charcoal dark:text-cream/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}