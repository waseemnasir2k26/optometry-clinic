import { Eye, Glasses, CircleDot, Scan, Baby, Sun } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'Comprehensive Eye Exams',
    description: 'Thorough vision testing and eye health evaluation using advanced diagnostic equipment.',
    highlight: true,
  },
  {
    icon: Glasses,
    title: 'Prescription Eyewear',
    description: 'Curated selection of designer frames and precision-crafted lenses for every style and budget.',
  },
  {
    icon: CircleDot,
    title: 'Contact Lens Fitting',
    description: 'Expert fitting for all types including daily, toric, multifocal, and specialty contacts.',
  },
  {
    icon: Scan,
    title: 'Retinal Imaging',
    description: 'State-of-the-art digital imaging for early detection of glaucoma, macular degeneration, and more.',
  },
  {
    icon: Baby,
    title: 'Pediatric Eye Care',
    description: "Gentle, thorough eye exams designed specifically for children's visual development needs.",
  },
  {
    icon: Sun,
    title: 'Dry Eye Treatment',
    description: 'Advanced therapies to diagnose and treat chronic dry eye for lasting comfort and relief.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete Vision Care Services
          </h2>
          <p className="text-gray-600 text-lg">
            From routine checkups to advanced diagnostics, we provide everything your eyes need under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.highlight
                  ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-white border-gray-100 hover:border-primary-200'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlight
                    ? 'bg-white/20'
                    : 'bg-primary-50 group-hover:bg-primary-100 transition-colors'
                }`}
              >
                <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-primary-600'}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${service.highlight ? 'text-primary-100' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
