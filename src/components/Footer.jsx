import { Eye } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <Eye className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">ClearView</span>
                <span className="block text-[10px] text-primary-400 font-medium -mt-1 tracking-widest uppercase">Optometry</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing exceptional eye care services with compassion and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-sm hover:text-primary-400 transition-colors">Reviews</a></li>
              <li><a href="#booking" className="text-sm hover:text-primary-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm hover:text-primary-400 transition-colors">Eye Exams</a></li>
              <li><a href="#services" className="text-sm hover:text-primary-400 transition-colors">Glasses</a></li>
              <li><a href="#services" className="text-sm hover:text-primary-400 transition-colors">Contact Lenses</a></li>
              <li><a href="#services" className="text-sm hover:text-primary-400 transition-colors">Pediatric Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
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

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} ClearView Optometry. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
