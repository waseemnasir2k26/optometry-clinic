import { useState, useEffect } from 'react'
import { Eye, Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/[0.04] py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300 group-hover:scale-105">
                <Eye className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                ClearView
              </span>
              <span className="block text-[10px] text-primary-600 font-semibold -mt-0.5 tracking-[0.2em] uppercase">
                Optometry
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Reviews' ? 'testimonials' : item.toLowerCase()}`}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-white/60'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-primary-600" />
              </div>
              (555) 123-4567
            </a>
            <a
              href="#booking"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-6 space-y-1">
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Reviews', href: '#testimonials' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl">
                <Phone className="w-4 h-4 text-primary-600" /> (555) 123-4567
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
