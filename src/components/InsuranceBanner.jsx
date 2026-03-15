const insurances = [
  'VSP', 'EyeMed', 'Blue Cross', 'Aetna', 'United Healthcare', 'Cigna', 'Humana', 'Medicare'
]

export default function InsuranceBanner() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-medium mb-6">Insurance Plans We Accept</p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {insurances.map((name) => (
            <span key={name} className="text-gray-400 font-semibold text-lg tracking-wide hover:text-gray-600 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
