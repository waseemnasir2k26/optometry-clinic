import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '', message: '',
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 lg:py-32 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="relative max-w-lg mx-auto px-5 text-center">
          <div className="glass rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-700">{formData.name}</span>! We'll confirm your appointment within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' }) }}
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
            >
              Book another appointment
            </button>
          </div>
        </div>
      </section>
    )
  }

  const inputClasses = "w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 focus:bg-white transition-all duration-200 placeholder:text-gray-300"
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2"

  return (
    <section id="booking" className="py-24 lg:py-32 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-primary-200 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Easy Online Booking
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight mb-6">
              Schedule Your
              <br />
              Eye Exam Today
            </h2>
            <p className="text-primary-200/70 text-lg leading-relaxed mb-10 max-w-lg">
              Take the first step toward better vision. Fill out the form and we'll confirm your appointment within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Calendar, title: 'Flexible Scheduling', desc: 'Evenings and weekends available' },
                { icon: Clock, title: 'Quick Confirmation', desc: 'We respond within 24 hours' },
                { icon: Phone, title: 'Prefer to Call?', desc: '(555) 123-4567' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <item.icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-primary-300/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Request an Appointment</h3>
            <p className="text-gray-400 text-sm mb-7">Fill in your details and we'll get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClasses} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="service" className={labelClasses}>Service Needed</label>
                <select id="service" name="service" required value={formData.service} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                  <option value="">Select a service</option>
                  <option value="comprehensive-exam">Comprehensive Eye Exam</option>
                  <option value="glasses">Designer Eyewear</option>
                  <option value="contacts">Contact Lens Fitting</option>
                  <option value="pediatric">Pediatric Eye Care</option>
                  <option value="dry-eye">Dry Eye Treatment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className={labelClasses}>Preferred Date</label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="time" className={labelClasses}>Preferred Time</label>
                  <select id="time" name="time" required value={formData.time} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                    <option value="">Select time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 7pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>Additional Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Any concerns or questions..." className={`${inputClasses} resize-none`} />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl text-base"
              >
                Request Appointment
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-400 text-center">
                We'll confirm within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
