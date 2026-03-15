import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Torres',
    role: 'Patient since 2019',
    rating: 5,
    text: "Best eye care experience I've ever had. Dr. Mitchell caught an issue that two other doctors missed. My whole family comes here now.",
    initials: 'JT',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Michael Chen',
    role: 'Patient since 2021',
    rating: 5,
    text: 'Incredibly welcoming and professional. Got my new glasses the same week. The quality and service are unmatched in the area.',
    initials: 'MC',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Sarah Williams',
    role: 'Patient since 2020',
    rating: 5,
    text: "They made contact lens fitting so easy! After years of struggling, they found the perfect fit for my astigmatism. Life-changing!",
    initials: 'SW',
    gradient: 'from-violet-500 to-purple-600',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary-50/50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-50 border border-warm-100 rounded-full text-sm font-semibold text-warm-500 mb-5">
            <Star className="w-3.5 h-3.5 fill-warm-400 text-warm-400" />
            Patient Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-5">
            Loved by{' '}
            <span className="text-primary-600">Thousands</span>
            <br />
            of Patients
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Real stories from real patients who trust us with their vision care.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
            >
              {/* Gradient line top */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${t.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Quote icon */}
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-primary-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-400 text-warm-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-8 text-[0.938rem]">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className={`w-11 h-11 bg-gradient-to-br ${t.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4 border border-gray-100 shadow-lg">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm-400 text-warm-400" />
              ))}
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-left">
              <p className="text-sm font-bold text-gray-800">4.9 out of 5</p>
              <p className="text-xs text-gray-400">Based on 200+ Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
