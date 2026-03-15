import { Award, Users, Heart, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Patients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Heart, value: '98%', label: 'Patient Satisfaction' },
]

const features = [
  'Board-certified optometrist',
  'Latest diagnostic technology',
  'Personalized treatment plans',
  'Flexible appointment scheduling',
  'Most insurance plans accepted',
  'Family-friendly environment',
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/60 rounded-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary-700" />
                  </div>
                  <p className="text-primary-800 font-display text-2xl font-bold">Dr. Sarah Mitchell</p>
                  <p className="text-primary-600 mt-2">O.D., F.A.A.O.</p>
                  <p className="text-primary-700/70 text-sm mt-4 max-w-xs mx-auto">
                    "Every patient deserves clear, comfortable vision and the highest standard of eye care."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Your Eye Health for Over 15 Years
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At ClearView Optometry, we combine advanced technology with compassionate care. Our experienced team takes the time to understand your unique vision needs and deliver personalized solutions that help you see and feel your best.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
