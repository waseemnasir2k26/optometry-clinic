import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react'

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #0f766e 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm font-semibold text-primary-600 mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Find Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-5">
            Visit Our{' '}
            <span className="text-primary-600">Clinic</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Conveniently located with free parking. Walk-ins welcome!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Contact cards - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            {[
              {
                icon: MapPin,
                title: 'Location',
                content: <>123 Vision Lane, Suite 200<br />Springfield, IL 62701</>,
                action: null,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '(555) 123-4567',
                action: { href: 'tel:+15551234567', label: 'Call now' },
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@clearviewoptometry.com',
                action: { href: 'mailto:hello@clearviewoptometry.com', label: 'Send email' },
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-500/20">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
                    {item.action && (
                      <a
                        href={item.action.href}
                        className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {item.action.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hours - 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/20">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-0">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-3.5 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm">{h.day}</span>
                    <span className={`text-sm font-bold ${h.time === 'Closed' ? 'text-red-400' : 'text-gray-900'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-primary-700 text-xs font-semibold">
                  Emergency? Call (555) 123-4567 anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Map - 5 cols */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl overflow-hidden h-full min-h-[340px] shadow-lg relative group">
              {/* Stylized map */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%),
                  linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)
                `,
                backgroundSize: '60px 60px'
              }} />

              {/* Road lines */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-white/10" />
              <div className="absolute top-0 bottom-0 left-2/3 w-[2px] bg-white/8" />
              <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/5" />

              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-primary-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-4 bg-primary-400/30 rounded-full" />
                  <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Address overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-900/95 via-primary-900/80 to-transparent pt-16 pb-6 px-6">
                <p className="text-white font-semibold text-sm mb-1">123 Vision Lane, Suite 200</p>
                <p className="text-primary-300/60 text-xs mb-4">Springfield, IL 62701</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
