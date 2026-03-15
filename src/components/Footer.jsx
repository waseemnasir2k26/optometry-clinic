import { Eye, ArrowUpRight } from 'lucide-react'

const links = {
  'Quick Links': [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Book Appointment', href: '#booking' },
  ],
  'Services': [
    { label: 'Eye Exams', href: '#services' },
    { label: 'Designer Eyewear', href: '#services' },
    { label: 'Contact Lenses', href: '#services' },
    { label: 'Pediatric Care', href: '#services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* CTA banner */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-primary-900/30 -mb-8 relative z-10">
          <div>
            <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-1">Ready for clearer vision?</h3>
            <p className="text-primary-200/70 text-sm">Book your comprehensive eye exam today.</p>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg text-sm whitespace-nowrap"
          >
            Book Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">ClearView</span>
                <span className="block text-[10px] text-primary-400 font-semibold -mt-0.5 tracking-[0.2em] uppercase">
                  Optometry
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Providing exceptional eye care with compassion and cutting-edge technology since 2010.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>123 Vision Lane, Suite 200</li>
              <li>Springfield, IL 62701</li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">(555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:hello@clearviewoptometry.com" className="hover:text-primary-400 transition-colors">hello@clearviewoptometry.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} ClearView Optometry. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
