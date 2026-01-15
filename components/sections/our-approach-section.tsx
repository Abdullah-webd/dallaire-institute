"use client"

export default function OurApproachSection() {
  return (
    <section id="approach" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-blue-700">Our Approach</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            We forge relationships, bridging security and humanitarian perspectives and responses, to create a holistic
            approach to preventing the recruitment and use of children in armed violence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Bridge Perspectives</h3>
            <p className="text-gray-700">
              We forge relationships between security and humanitarian perspectives to create holistic peace solutions.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Child-Centered Security</h3>
            <p className="text-gray-700">
              Preventing recruitment and use of children in armed violence through targeted interventions.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Global Engagement</h3>
            <p className="text-gray-700">
              Working directly with governments, NGOs, and multilateral partners across continents.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-700 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Research-Driven</h3>
            <p className="text-gray-700">
              Grounded in rigorous research and evidence-based approaches to conflict prevention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
