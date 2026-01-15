"use client"

export default function DonateSection() {
  return (
    <section id="donate" className="relative py-24 px-6 bg-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Help us put children at the heart of peace and security.</h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
          Your support enables us to continue our vital work across the globe, training security institutions and
          protecting vulnerable children.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-lg bg-white text-blue-700 font-bold text-lg hover:bg-gray-100 transition">
            Support Us
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition">
            Learn About Impact
          </button>
        </div>

        {/* Impact stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-white/10 rounded-lg">
            <div className="text-4xl font-bold mb-2">15+</div>
            <p className="text-blue-100">Years of Experience</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg">
            <div className="text-4xl font-bold mb-2">50+</div>
            <p className="text-blue-100">Countries Reached</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg">
            <div className="text-4xl font-bold mb-2">100K+</div>
            <p className="text-blue-100">Children Protected</p>
          </div>
        </div>
      </div>
    </section>
  )
}
