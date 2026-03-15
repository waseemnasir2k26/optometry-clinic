import { useState } from 'react'
import { Eye, Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">ClearView</span>
              <span className="block text-[11px] text-primary-600 font-medium -mt-1 tracking-widest uppercase">Optometry</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <a
              href="#booking"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <a href="#services" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-600 py-2">Services</a>
              <a href="#about" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-600 py-2">About</a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-600 py-2">Reviews</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-600 py-2">Contact</a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-base font-medium text-gray-700 py-2">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
