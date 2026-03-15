import { Award, Users, Heart, CheckCircle, GraduationCap } from 'lucide-react'

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Patients', color: 'from-primary-500 to-primary-600' },
  { icon: Award, value: '15+', label: 'Years Experience', color: 'from-amber-500 to-orange-500' },
  { icon: Heart, value: '98%', label: 'Satisfaction', color: 'from-rose-500 to-pink-500' },
]

const features = [
  'Board-certified optometrist',
  'Latest diagnostic technology',
  'Personalized treatment plans',
  'Flexible scheduling',
  'Most insurance accepted',
  'Family-friendly clinic',
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50/80 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #0f766e 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Doctor visual */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-100/40 to-primary-200/20 rounded-[3rem] blur-2xl" />

            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 aspect-[4/3.5] shadow-2xl shadow-primary-900/20 p-10 flex flex-col justify-between">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />

                {/* Top badge */}
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <GraduationCap className="w-6 h-6 text-white/80" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium tracking-wider uppercase">Lead Optometrist</p>
                    <p className="text-white font-semibold">Board Certified, FAAO</p>
                  </div>
                </div>

                {/* Doctor info */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-5 border border-white/10">
                    <span className="text-2xl font-bold text-white/80">SM</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">
                    Dr. Sarah Mitchell
                  </h3>
                  <p className="text-primary-200/60 text-sm mb-5">O.D., F.A.A.O.</p>
                  <p className="text-primary-200/50 text-sm leading-relaxed max-w-sm italic">
                    "Every patient deserves clear, comfortable vision and the highest standard of care."
                  </p>
                </div>
              </div>

              {/* Stats row - floating below */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-4 text-center border border-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`w-9 h-9 mx-auto mb-2.5 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xl font-extrabold text-gray-900">{stat.value}</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm font-semibold text-primary-600 mb-5">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              Why Choose Us
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-6 leading-[1.15]">
              Dedicated to Your
              <br />
              <span className="text-primary-600">Eye Health</span> for 15+ Years
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              At ClearView Optometry, we combine cutting-edge technology with compassionate care. Our team takes the time to understand your unique vision needs and deliver solutions that help you see your best.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                    <CheckCircle className="w-3.5 h-3.5 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
