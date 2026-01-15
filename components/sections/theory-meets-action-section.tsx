"use client"

export default function TheoryMeetsActionSection() {
  return (
    <section className="relative py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-blue-700">Where Theory Meets Action</h2>

            <p className="text-lg text-gray-700">
              We apply our innovative research to create action-oriented solutions. Recently, we developed a
              ground-breaking and comprehensive early warning system to engage multi-lateral organizations, security
              institutions, human rights groups and child protection agencies to sound the alarm on the risk of
              recruitment of children - a critical warning of impending and large-scale conflicts.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900">Early Warning System</h4>
                  <p className="text-sm text-gray-700">Groundbreaking system engaging multilateral organizations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900">Direct Implementation</h4>
                  <p className="text-sm text-gray-700">15 years of direct engagement with security institutions.</p>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Explore Our Research
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.squarespace-cdn.com/content/v1/632482dc1b943212b681b181/33e7cffb-a5f9-4e9a-bca7-179eaae3b7e1/06+-+Vision_Mission_Values+-+MONUC+Peacekeeper+Holds+Child%27s+Hand_Credit-Marie+Frechon_UN+Photo.jpg"
              alt="Peace and Security"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
