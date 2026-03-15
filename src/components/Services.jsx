import { Eye, Glasses, CircleDot, Scan, Baby, Sun, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'Comprehensive Eye Exams',
    description: 'Thorough vision testing and eye health evaluation using advanced diagnostic technology.',
    color: 'from-primary-500 to-primary-700',
    bg: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Glasses,
    title: 'Designer Eyewear',
    description: 'Curated selection of premium frames and precision-crafted lenses for every style.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: CircleDot,
    title: 'Contact Lens Fitting',
    description: 'Expert fitting for daily, toric, multifocal, and specialty contact lenses.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Scan,
    title: 'Retinal Imaging',
    description: 'Digital imaging for early detection of glaucoma, macular degeneration, and more.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Baby,
    title: 'Pediatric Eye Care',
    description: "Gentle, thorough exams designed for children's visual development and learning needs.",
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Sun,
    title: 'Dry Eye Treatment',
    description: 'Advanced therapies to diagnose and treat chronic dry eye for lasting relief.',
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm font-semibold text-primary-600 mb-5">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
            Our Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-5">
            Complete Vision Care
            <br />
            <span className="text-primary-600">Under One Roof</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From routine checkups to advanced diagnostics, everything your eyes need with the care they deserve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl border border-gray-100 p-7 sm:p-8 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 cursor-default"
            >
              {/* Gradient accent line at top */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${service.color} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[0.938rem]">
                {service.description}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
