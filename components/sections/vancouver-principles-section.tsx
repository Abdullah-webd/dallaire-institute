"use client"

export default function VancouverPrinciplesSection() {
  return (
    <section id="principles" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-blue-700">The Vancouver Principles</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            As co-developers and custodians of The Vancouver Principles on Peacekeeping and the Prevention of the
            Recruitment and Use of Child Soldiers, we advise governments and multilateral partners on integrating the
            Vancouver Principles into security governance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">01</h3>
            <p className="text-gray-700 font-semibold">Child Protection Priority</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">02</h3>
            <p className="text-gray-700 font-semibold">Multi-Sector Coordination</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">03</h3>
            <p className="text-gray-700 font-semibold">Evidence-Based Action</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">04</h3>
            <p className="text-gray-700 font-semibold">Community Engagement</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">05</h3>
            <p className="text-gray-700 font-semibold">Accountability & Monitoring</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">06</h3>
            <p className="text-gray-700 font-semibold">Sustainable Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
