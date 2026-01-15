"use client"

export default function WhatIsNewSection() {
  const news = [
    {
      title: "Child Soldiers Prevention Handbook",
      category: "Publication",
      image: "/handbook-military-security.jpg",
      description: "Tactical guide for security organizations on preventing child recruitment in armed conflicts.",
    },
    {
      title: "Training in Mozambique",
      category: "Initiative",
      image: "/african-students-learning-classroom.jpg",
      description: "Empowering local communities through comprehensive peace and security training programs.",
    },
    {
      title: "Early Warning System Launch",
      category: "Innovation",
      image: "/futuristic-data-dashboard.jpg",
      description: "Revolutionary system to predict and prevent recruitment of children before conflicts escalate.",
    },
  ]

  return (
    <section id="latest" className="relative py-24 px-6 overflow-hidden" style={{ background: "rgb(19, 26, 40)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="px-4 py-2 rounded-full text-cyan-400 text-sm font-semibold"
            style={{ background: "rgba(21, 30, 48, 1)" }}
          >
            Recent Updates
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6">
            <span className="gradient-text">What's New</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className="relative mb-6 overflow-hidden rounded-xl border h-64"
                style={{ borderColor: "rgba(0, 212, 255, 0.3)", boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <span
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-gray-900 text-xs font-bold"
                  style={{ background: "rgba(0, 229, 184, 0.9)" }}
                >
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">{item.title}</h3>
              <p className="group-hover:text-gray-100 transition" style={{ color: "rgba(166, 172, 187, 1)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
