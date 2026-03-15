import { ArrowRight, Star, Shield, Clock, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-accent-50/50" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-accent-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary-100/20 rounded-full blur-2xl animate-pulse-soft" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #0f766e 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-32 pb-20 lg:pt-28 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200/60 text-primary-700 rounded-full text-sm font-medium mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Accepting new patients — Same-day appointments
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-6">
              Your Vision
              <br />
              Deserves{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-600">Expert Care</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary-200/40 rounded-full -z-0" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              Comprehensive eye exams, designer eyewear, and specialized treatments — all with the personal attention you deserve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl shadow-primary-600/25 hover:shadow-2xl hover:shadow-primary-600/30 hover:-translate-y-0.5 text-base"
              >
                Book Your Eye Exam
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-200/80 hover:border-primary-200 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-300 text-base shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                Call (555) 123-4567
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-warm-400 text-warm-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-800">4.9</span>
                <span className="text-sm text-gray-400">Google (200+)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Insurance accepted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 text-primary-500" />
                <span>Evening hours</span>
              </div>
            </div>
          </div>

          {/* Right visual - 5 cols */}
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Main visual card */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-[2rem] blur-2xl" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-900/15 aspect-[3/4] bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
                {/* Decorative pattern inside */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />

                {/* Eye illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-44 h-44 rounded-full border-[3px] border-white/20 flex items-center justify-center animate-float">
                      <div className="w-32 h-32 rounded-full border-[3px] border-white/30 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg" />
                        </div>
                      </div>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute -top-2 left-1/2 w-3 h-3 bg-primary-300/60 rounded-full animate-pulse-soft" />
                    <div className="absolute top-1/2 -right-3 w-2.5 h-2.5 bg-primary-200/50 rounded-full animate-pulse" />
                    <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse-soft" />
                  </div>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-900/80 to-transparent pt-20 pb-8 px-8">
                  <p className="text-white/90 font-display text-xl font-semibold">Advanced Eye Care</p>
                  <p className="text-primary-200/70 text-sm mt-1">State-of-the-art diagnostics</p>
                </div>
              </div>
            </div>

            {/* Floating card - top right */}
            <div className="absolute -top-3 -right-3 glass rounded-2xl p-5 shadow-xl border border-white/60 animate-float-delay">
              <div className="text-center">
                <p className="text-3xl font-extrabold bg-gradient-to-br from-primary-600 to-primary-800 bg-clip-text text-transparent">15+</p>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">Years of<br/>Excellence</p>
              </div>
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-4 shadow-xl border border-white/60 animate-float max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">All Insurance</p>
                  <p className="text-xs text-gray-400">Most plans accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
