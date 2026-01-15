"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/dallaire-logo.png"
            alt="Dallaire Institute Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#our-story" className="text-gray-700 hover:text-blue-700 transition font-medium">
            About Us
          </Link>
          <Link href="#approach" className="text-gray-700 hover:text-blue-700 transition font-medium">
            Approach
          </Link>
          <Link href="#latest" className="text-gray-700 hover:text-blue-700 transition font-medium">
            Latest News
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-700 transition font-medium">
            Resources
          </Link>
          <Link
            href="/lms"
            className="px-6 py-2 rounded-lg border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition font-semibold"
          >
            LMS Portal
          </Link>
          <Link
            href="#donate"
            className="px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-semibold"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-700" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 border-b bg-white md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Link href="#our-story" className="text-gray-700 hover:text-blue-700 font-medium">
                About Us
              </Link>
              <Link href="#approach" className="text-gray-700 hover:text-blue-700 font-medium">
                Approach
              </Link>
              <Link href="#latest" className="text-gray-700 hover:text-blue-700 font-medium">
                Latest News
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-700 font-medium">
                Resources
              </Link>
              <Link
                href="/lms"
                className="px-4 py-2 rounded-lg border-2 border-blue-700 text-blue-700 text-center font-semibold hover:bg-blue-50"
              >
                LMS Portal
              </Link>
              <Link
                href="#donate"
                className="px-4 py-2 rounded-lg bg-blue-700 text-white text-center font-semibold hover:bg-blue-800"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
