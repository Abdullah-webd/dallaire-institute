"use client"

import { useState } from "react"
import DashboardHome from "@/components/lms/tabs/dashboard-home"
import CoursesTab from "@/components/lms/tabs/courses-tab"
import AssignmentsTab from "@/components/lms/tabs/assignments-tab"
import ExamsTab from "@/components/lms/tabs/exams-tab"
import ProgressTab from "@/components/lms/tabs/progress-tab"
import ProfileTab from "@/components/lms/tabs/profile-tab"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-3xl font-bold text-blue-700">Learning Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-6 border-b border-gray-200 mb-8">
          {[
            { id: "home", label: "Home" },
            { id: "courses", label: "Courses" },
            { id: "assignments", label: "Assignments" },
            { id: "exams", label: "Exams" },
            { id: "progress", label: "Progress" },
            { id: "profile", label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === tab.id ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "home" && <DashboardHome />}
        {activeTab === "courses" && <CoursesTab />}
        {activeTab === "assignments" && <AssignmentsTab />}
        {activeTab === "exams" && <ExamsTab />}
        {activeTab === "progress" && <ProgressTab />}
        {activeTab === "profile" && <ProfileTab />}
      </div>
    </div>
  )
}
