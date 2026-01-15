"use client"

import { useState } from "react"
import LMSSidebar from "@/components/lms/lms-sidebar"
import LMSDashboard from "@/components/lms/lms-dashboard"
import CoursesTab from "@/components/lms/tabs/courses-tab"
import AssignmentsTab from "@/components/lms/tabs/assignments-tab"
import ExamsTab from "@/components/lms/tabs/exams-tab"
import ProgressTab from "@/components/lms/tabs/progress-tab"
import ProfileTab from "@/components/lms/tabs/profile-tab"

export default function LMSPage() {
  const [activeTab, setActiveTab] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setSidebarOpen(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex">
      <LMSSidebar activeTab={activeTab} setActiveTab={handleTabChange} isOpen={sidebarOpen} />

      <div className="flex-1 w-full md:w-auto flex flex-col">
        {/* Mobile sidebar toggle header */}
        <div className="md:hidden sticky top-0 bg-white border-b border-gray-200 p-4 z-40 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Dashboard</h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-blue-700 hover:bg-gray-100 p-2 rounded-lg transition flex items-center gap-2"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-sm font-medium">Menu</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <div className="animate-fade-in-up">
              {activeTab === "home" && <LMSDashboard setActiveTab={handleTabChange} />}
              {activeTab === "courses" && <CoursesTab />}
              {activeTab === "assignments" && <AssignmentsTab />}
              {activeTab === "exams" && <ExamsTab />}
              {activeTab === "progress" && <ProgressTab />}
              {activeTab === "profile" && <ProfileTab />}
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}
    </main>
  )
}
