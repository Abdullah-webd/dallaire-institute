"use client"

import Link from "next/link"
import { useState } from "react"

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-blue-700 text-white transition-all duration-300 flex flex-col border-r border-blue-800`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          {isOpen && <span className="font-bold text-lg">DI Learning</span>}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-blue-600 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-2m0 0l4-2"
              />
            </svg>
            {isOpen && <span>Dashboard</span>}
          </Link>

          <Link
            href="/dashboard?tab=courses"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25c0 5.079 4.02 9.461 9 9.722m0-13c5.5 0 10 4.745 10 10.972 0 5.079-4.02 9.461-9 9.722"
              />
            </svg>
            {isOpen && <span>Courses</span>}
          </Link>

          <Link
            href="/dashboard?tab=assignments"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {isOpen && <span>Assignments</span>}
          </Link>

          <Link
            href="/dashboard?tab=exams"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {isOpen && <span>Exams</span>}
          </Link>

          <Link
            href="/dashboard?tab=progress"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L5 21" />
            </svg>
            {isOpen && <span>Progress</span>}
          </Link>

          <Link
            href="/dashboard?tab=profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {isOpen && <span>Profile</span>}
          </Link>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-blue-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {isOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Mobile toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-8 left-8 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
    </>
  )
}
