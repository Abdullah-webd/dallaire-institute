"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Animated background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.squarespace-cdn.com/content/v1/632482dc1b943212b681b181/81a810d6-faee-41cc-a074-4849eb5a3075/UN+Photo-Sophia+Paris_Haiti_UN7401455_9a6_.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center text-white transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Peace is possible, violence is preventable and children must be at the heart of the solutions.
        </h1>

        <p
          className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 ${isLoaded ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          We initiate sustainable and effective approaches to global peace and security.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? "animate-fade-in-up delay-300" : "opacity-0"}`}
        >
          <button className="px-8 py-4 rounded-lg bg-blue-700 text-white font-bold text-lg hover:bg-blue-800 transition hover:scale-105 transform">
            Support Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
