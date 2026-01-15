"use client"

import Link from "next/link"
import { useState } from "react"

export default function LMSNavigation({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const [notificationCount] = useState(3)

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphic-dark border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-color-accent-cyan to-color-accent-teal rounded-lg flex items-center justify-center text-white font-bold text-lg glow-cyan">
            DI
          </div>
          <span className="text-lg font-bold gradient-text hidden sm:inline">Learning Hub</span>
        </Link>

        {/* Desktop Tabs */}
        <div className="hidden md:flex gap-2">
          {[
            { id: "home", label: "Home", icon: "🏠" },
            { id: "courses", label: "Courses", icon: "📚" },
            { id: "assignments", label: "Assignments", icon: "✍️" },
            { id: "exams", label: "Exams", icon: "📝" },
            { id: "progress", label: "Progress", icon: "📊" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === tab.id
                  ? "bg-color-accent-cyan/20 text-color-accent-cyan border border-color-accent-cyan/50"
                  : "text-color-text-secondary hover:text-color-accent-cyan"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-color-surface/50 rounded-lg transition">
            <svg className="w-6 h-6 text-color-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-3 h-3 bg-color-accent-cyan rounded-full glow-cyan" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-color-accent-cyan to-color-accent-teal flex items-center justify-center text-white font-bold glow-cyan hover:shadow-lg transition"
          >
            S
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-color-border px-6 py-4 flex gap-2 overflow-x-auto">
        {[
          { id: "home", label: "Home", icon: "🏠" },
          { id: "courses", label: "Courses", icon: "📚" },
          { id: "assignments", label: "Assignments", icon: "✍️" },
          { id: "exams", label: "Exams", icon: "📝" },
          { id: "progress", label: "Progress", icon: "📊" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition ${
              activeTab === tab.id ? "bg-color-accent-cyan/20 text-color-accent-cyan" : "text-color-text-secondary"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
