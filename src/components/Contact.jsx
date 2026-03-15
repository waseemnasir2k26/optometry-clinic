import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 text-lg">
            Conveniently located with free parking. Walk-ins welcome!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Vision Lane, Suite 200<br />
                    Springfield, IL 62701
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@clearviewoptometry.com" className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                    hello@clearviewoptometry.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Office Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium text-sm">{h.day}</span>
                  <span className={`text-sm font-semibold ${h.time === 'Closed' ? 'text-red-500' : 'text-primary-600'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-xl">
              <p className="text-primary-700 text-sm font-medium">
                Emergency? Call us anytime at (555) 123-4567
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center border border-gray-100 shadow-sm">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Interactive Map</p>
              <p className="text-gray-400 text-sm mt-1">Google Maps embed goes here</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
