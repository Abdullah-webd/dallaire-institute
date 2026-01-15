"use client"

import { useState } from "react"

export default function LMSDashboard({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [continueLearning] = useState([
    { id: 1, title: "Child Protection in Conflict", progress: 65, image: "/african-children-classroom.jpg" },
    { id: 2, title: "Peace Building Fundamentals", progress: 42, image: "/diverse-students-learning.png" },
    { id: 3, title: "Security Policy Analysis", progress: 80, image: "/conference-discussion.jpg" },
    { id: 4, title: "Humanitarian Operations Ethics", progress: 55, image: "/futuristic-data-dashboard.png" },
    { id: 5, title: "Conflict Resolution Strategies", progress: 71, image: "/diverse-students-learning.png" },
    { id: 6, title: "Early Warning Systems", progress: 38, image: "/african-children-classroom.jpg" },
  ])

  const [upcomingEvents] = useState([
    { id: 1, date: "Jan 28", title: "Webinar: Early Warning Systems", time: "2:00 PM UTC", category: "Live Session" },
    { id: 2, date: "Feb 5", title: "Assignment Due: Peace Strategy", time: "11:59 PM UTC", category: "Deadline" },
    { id: 3, date: "Feb 12", title: "Exam: Child Protection Module", time: "10:00 AM UTC", category: "Assessment" },
    {
      id: 4,
      date: "Feb 18",
      title: "Group Discussion: Regional Conflicts",
      time: "3:30 PM UTC",
      category: "Discussion",
    },
    { id: 5, date: "Feb 25", title: "Project Submission Deadline", time: "11:59 PM UTC", category: "Deadline" },
  ])

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          Welcome Back, <span className="text-blue-700">Scholar</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Continue your journey in peace and security education. 7 new resources available this week.
        </p>
      </div>

      {/* AI Recommendations */}
      <div className="mb-8 md:mb-12 bg-blue-50 border-2 border-blue-200 p-6 md:p-8 rounded-lg">
        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="text-3xl md:text-4xl">🤖</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">AI Study Recommendations</h3>
            <p className="text-sm md:text-base text-gray-600">
              Based on your learning patterns, we recommend focusing on interactive case studies this week.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {["Case Study: Rwanda Genocide", "Documentary: Child Soldiers", "Interview: General Dallaire"].map(
            (item, i) => (
              <button
                key={i}
                className="p-3 md:p-4 rounded-lg bg-white border border-blue-200 hover:border-blue-400 text-left transition hover:bg-blue-100 text-sm md:text-base"
              >
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Suggested</p>
                <p className="font-semibold text-gray-900">{item}</p>
              </button>
            ),
          )}
        </div>
      </div>

      {/* Continue Learning */}
      <div className="mb-8 md:mb-12">
        <div className="flex justify-between items-center mb-4 md:mb-6 flex-wrap gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">Continue Learning</h2>
          <button
            onClick={() => setActiveTab("courses")}
            className="text-blue-700 hover:text-blue-800 transition text-sm md:text-base"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {continueLearning.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="h-32 md:h-40 overflow-hidden relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base group-hover:text-blue-700 transition line-clamp-2">
                  {course.title}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs md:text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span className="text-blue-700 font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Upcoming Events</h2>
        <div className="space-y-3 md:space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border-l-4 border-blue-700 hover:border-blue-800 p-4 md:p-6 rounded-lg hover:shadow-md transition cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2 md:gap-4 flex-col md:flex-row">
                <div className="flex-1 w-full min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                    <span className="px-2 md:px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs md:text-sm font-bold">
                      {event.category}
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">{event.date}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition mb-1">
                    {event.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">{event.time}</p>
                </div>
                <div className="text-xl md:text-2xl group-hover:scale-110 transition flex-shrink-0">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white border-2 border-blue-200 p-4 md:p-6 rounded-lg text-center hover:shadow-md transition">
          <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1 md:mb-2">12</div>
          <p className="text-xs md:text-sm text-gray-600">Courses Enrolled</p>
        </div>
        <div className="bg-white border-2 border-green-200 p-4 md:p-6 rounded-lg text-center hover:shadow-md transition">
          <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1 md:mb-2">8</div>
          <p className="text-xs md:text-sm text-gray-600">Courses Completed</p>
        </div>
        <div className="bg-white border-2 border-orange-200 p-4 md:p-6 rounded-lg text-center hover:shadow-md transition">
          <div className="text-3xl md:text-4xl font-bold text-orange-700 mb-1 md:mb-2">64%</div>
          <p className="text-xs md:text-sm text-gray-600">Overall Progress</p>
        </div>
        <div className="bg-white border-2 border-blue-200 p-4 md:p-6 rounded-lg text-center hover:shadow-md transition">
          <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1 md:mb-2">142</div>
          <p className="text-xs md:text-sm text-gray-600">Learning Points</p>
        </div>
      </div>
    </div>
  )
}
