import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Torres',
    role: 'Patient since 2019',
    rating: 5,
    text: "Best eye care experience I've ever had. Dr. Mitchell caught an issue that two other doctors missed. My whole family comes here now.",
    initials: 'JT',
  },
  {
    name: 'Michael Chen',
    role: 'Patient since 2021',
    rating: 5,
    text: 'The staff is incredibly welcoming and professional. Got my new glasses the same week. The quality and service are unmatched in the area.',
    initials: 'MC',
  },
  {
    name: 'Sarah Williams',
    role: 'Patient since 2020',
    rating: 5,
    text: "They made contact lens fitting so easy! After struggling with other brands for years, they found the perfect fit for my astigmatism. Life-changing!",
    initials: 'SW',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">Patient Reviews</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from real patients who trust us with their vision care.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 rounded-full px-6 py-3 border border-gray-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">4.9 out of 5</span> based on 200+ Google reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
