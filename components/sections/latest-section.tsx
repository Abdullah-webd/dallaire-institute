"use client"

export default function LatestSection() {
  return (
    <section id="latest" className="relative py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-blue-700">Our Latest</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Check out the latest news on our exciting events, new initiatives and ongoing research. We want to keep you
            updated on all the ways we are working to move the needle on global peace and security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://images.squarespace-cdn.com/content/v1/632482dc1b943212b681b181/e4d7608b-e88d-4f79-9086-a9acf4f12010/08.+Training+in+Mozambique_IMG_4415.JPG"
              alt="Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Training in Mozambique</h3>
              <p className="text-gray-700">Building capacity through direct engagement with security forces.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="./dallimg1.webp"
              alt="Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Research Initiatives</h3>
              <p className="text-gray-700">Advancing knowledge on peace and security challenges globally.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="./dalimg.webp"
              alt="Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Events & Conferences</h3>
              <p className="text-gray-700">Bringing together leaders and experts in global peace.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
