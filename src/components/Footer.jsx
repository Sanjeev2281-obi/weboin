export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal dark:bg-ink border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-bold text-cream mb-3">
              Luminary<span className="text-accent">.</span>
            </p>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              A creative design studio crafting bold digital experiences for ambitious brands worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-cream/30 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {['services', 'portfolio', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-cream/60 hover:text-accent text-sm capitalize transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-cream/30 uppercase tracking-widest mb-4">Connect</p>
            <ul className="space-y-2">
              {['Twitter', 'LinkedIn', 'Dribbble', 'Behance'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-cream/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            © {currentYear} Luminary Studio. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}