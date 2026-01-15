"use client"

export default function WhatsNewSection() {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700">What's New</h2>

            <p className="text-lg text-gray-700">
              This handbook supports all security-focused organizations engaged in peace operations, including
              troop-contributing countries (TCCs), host nation military and police, private security companies and
              national prison services. It provides tactically relevant information based on the Dallaire Institute's 15
              years of experience working directly with the military, police, intelligence and corrections to strengthen
              operational, strategic and tactical capacities to prevent the recruitment and use of children in armed
              conflicts and violence.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.squarespace-cdn.com/content/v1/632482dc1b943212b681b181/13bf5f6d-029e-4832-8ec6-3f6194a003f5/Handbook+Imagecopy.png"
              alt="Handbook"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
