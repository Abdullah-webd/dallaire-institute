"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
                DI
              </div>
              <span className="font-bold text-gray-900">Dallaire Institute</span>
            </div>
            <p className="text-sm text-gray-700">
              Sustainable approaches to global peace and security, putting children at the heart of solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-blue-700">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-blue-700">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Vancouver Principles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-blue-700">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="mailto:info@dallaireinstitute.org" className="text-gray-700 hover:text-blue-700 transition">
                  Email
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-blue-700 transition">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-8 mb-12 bg-white border border-gray-200 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h4>
              <p className="text-gray-700">Get the latest news on our initiatives and research.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
              <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <p>&copy; 2026 Dallaire Institute. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-700 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-700 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-700 transition">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
