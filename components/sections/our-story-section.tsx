"use client"

import { useEffect, useState, useRef } from "react"

export default function OurStorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="our-story" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/632482dc1b943212b681b181/a94bb117-e9d1-4bb6-9ea7-50d8935731f6/PeterBregg-1.jpg"
              alt="General Roméo Dallaire"
              className="w-full rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700">Our Story</h2>

            <p className="text-lg text-gray-700">
              Our work is inspired by the lived experience of our founder,{" "}
              <span className="font-semibold text-blue-700">General Roméo Dallaire</span>, Force Commander of the UN
              Assistance Mission for Rwanda during the 1994 genocide.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition hover:scale-105 transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
