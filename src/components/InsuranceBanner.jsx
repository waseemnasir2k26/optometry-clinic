const insurances = [
  'VSP Vision',
  'EyeMed',
  'Blue Cross',
  'Aetna',
  'UnitedHealth',
  'Cigna',
  'Humana',
  'Medicare',
]

export default function InsuranceBanner() {
  return (
    <section className="py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-8">
          Insurance Plans We Accept
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
          {insurances.map((name) => (
            <div
              key={name}
              className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 font-bold text-sm tracking-wide hover:text-primary-600 hover:bg-primary-50 hover:border-primary-100 transition-all duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
