"use client"

import Link from "next/link"
import Image from "next/image"

interface LMSSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  isOpen: boolean
}

export default function LMSSidebar({ activeTab, setActiveTab, isOpen }: LMSSidebarProps) {
  const menuItems = [
    { id: "home", label: "Dashboard", icon: "🏠" },
    { id: "courses", label: "Courses", icon: "📚" },
    { id: "assignments", label: "Assignments", icon: "✍️" },
    { id: "exams", label: "Exams", icon: "📝" },
    { id: "progress", label: "Progress", icon: "📊" },
    { id: "profile", label: "Profile", icon: "👤" },
  ]

  return (
    <>
      <aside
        className={`fixed md:sticky left-0 top-0 h-screen bg-white border-r border-gray-200 w-64 transition-transform duration-300 md:translate-x-0 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/dallaire-logo.png"
                alt="Dallaire Institute Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === item.id
                        ? "bg-blue-700 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to Website */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium w-full"
            >
              <span>↩️</span>
              Back to Website
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setActiveTab(activeTab)} />}
    </>
  )
}
