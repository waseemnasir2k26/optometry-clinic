import { ArrowRight, Star, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 5,000+ patients
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Your Vision,{' '}
              <span className="text-primary-600">Our Priority</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Comprehensive eye care with state-of-the-art technology. From routine exams to specialized treatments, we help you see the world clearly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Book Your Exam
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all text-base"
              >
                Our Services
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-700">4.9/5</span>
                <span>on Google</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-500" />
                Same-day appointments
              </div>
            </div>
          </div>

          {/* Right - Hero image placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-primary-200 to-primary-400">
              {/* Decorative eye exam visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-white/60 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/80" />
                    </div>
                  </div>
                  <p className="text-lg font-medium opacity-80">Expert Eye Care</p>
                  <p className="text-sm opacity-60 mt-1">Since 2010</p>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Insurance Accepted</p>
                    <p className="text-xs text-gray-500">Most major plans welcome</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-xs text-gray-500 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
