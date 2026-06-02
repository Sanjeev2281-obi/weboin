import { useEffect, useRef } from 'react'

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100)
    }
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream dark:bg-charcoal"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-charcoal/10 dark:border-cream/10" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-charcoal/10 dark:border-cream/10" />

        {/* Accent block */}
        <div className="absolute top-1/4 right-16 w-3 h-24 bg-accent rounded-full opacity-80" />
        <div className="absolute top-1/3 right-24 w-3 h-12 bg-accent rounded-full opacity-40" />

        {/* Bottom left dots */}
        <div className="absolute bottom-32 left-12 grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-charcoal/20 dark:bg-cream/20"
            />
          ))}
        </div>

        {/* Floating card - visible on lg+ */}
        <div className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 animate-float">
          <div className="bg-white dark:bg-ink rounded-2xl shadow-xl p-5 w-52 border border-charcoal/5 dark:border-cream/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-cream/60">Project Done</p>
                <p className="text-sm font-semibold text-charcoal dark:text-cream">Rebrand Launch</p>
              </div>
            </div>
            <div className="h-1.5 bg-charcoal/10 dark:bg-cream/10 rounded-full">
              <div className="h-1.5 bg-accent rounded-full w-4/5" />
            </div>
            <p className="text-xs text-muted dark:text-cream/50 mt-1">80% Complete</p>
          </div>
        </div>

        {/* Stats card - visible on lg+ */}
        <div className="hidden lg:block absolute bottom-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-charcoal dark:bg-accent rounded-2xl p-4 w-40">
            <p className="text-4xl font-display font-bold text-cream dark:text-charcoal">150+</p>
            <p className="text-xs text-cream/70 dark:text-charcoal/70 mt-1">Projects Delivered</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl" ref={headingRef}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted dark:text-cream/60">
              Creative Design Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal dark:text-cream leading-tight mb-6">
            We craft bold{' '}
            <span className="italic text-gradient">digital</span>
            <br />
            experiences.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted dark:text-cream/60 leading-relaxed max-w-xl mb-10">
            Luminary Studio is a full-service design agency helping ambitious brands stand out through thoughtful design, compelling stories, and cutting-edge technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToPortfolio}
              className="group flex items-center gap-3 bg-charcoal dark:bg-accent text-cream dark:text-charcoal font-medium px-8 py-4 rounded-full hover:bg-accent hover:text-charcoal dark:hover:bg-cream transition-all duration-300"
            >
              View Our Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-3 border border-charcoal/30 dark:border-cream/30 text-charcoal dark:text-cream font-medium px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-14">
            <div className="flex -space-x-3">
              {['#E8C547', '#A78BFA', '#34D399', '#F87171'].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-cream dark:border-charcoal"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-muted dark:text-cream/60">
                Trusted by <span className="font-semibold text-charcoal dark:text-cream">50+</span> happy clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted dark:text-cream/40 tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-muted dark:text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}