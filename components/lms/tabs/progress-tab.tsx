"use client"

import { useState } from "react"

export default function ProgressTab() {
  const [overallStats] = useState({
    completedCourses: 8,
    enrolledCourses: 12,
    totalPoints: 2840,
    averageScore: 87,
    streakDays: 14,
  })

  const [courseProgress] = useState([
    { title: "Child Protection in Armed Conflict", progress: 78, completed: false },
    { title: "Peace Building Fundamentals", progress: 100, completed: true },
    { title: "Early Warning Systems & Analysis", progress: 62, completed: false },
    { title: "Humanitarian Operations & Ethics", progress: 45, completed: false },
    { title: "Advanced Security Policy", progress: 100, completed: true },
    { title: "Conflict Resolution Strategies", progress: 89, completed: false },
    { title: "Peace Education Methods", progress: 92, completed: true },
    { title: "Regional Crisis Analysis", progress: 56, completed: false },
  ])

  return (
    <div className="space-y-6 md:space-y-8 w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">Learning Progress</h2>
        <p className="text-sm md:text-base text-gray-700">Track your academic journey and achievements</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-8 md:mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 text-center">
          <div className="text-2xl md:text-4xl font-bold text-blue-700 mb-1 md:mb-2">
            {overallStats.completedCourses}
          </div>
          <p className="text-xs md:text-sm text-gray-600">Completed</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 text-center">
          <div className="text-2xl md:text-4xl font-bold text-green-700 mb-1 md:mb-2">
            {overallStats.enrolledCourses}
          </div>
          <p className="text-xs md:text-sm text-gray-600">Enrolled</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 md:p-6 text-center">
          <div className="text-2xl md:text-4xl font-bold text-purple-700 mb-1 md:mb-2">{overallStats.totalPoints}</div>
          <p className="text-xs md:text-sm text-gray-600">Points</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 md:p-6 text-center">
          <div className="text-2xl md:text-4xl font-bold text-orange-700 mb-1 md:mb-2">
            {overallStats.averageScore}%
          </div>
          <p className="text-xs md:text-sm text-gray-600">Avg Score</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 text-center">
          <div className="text-2xl md:text-4xl font-bold text-red-700 mb-1 md:mb-2">{overallStats.streakDays}</div>
          <p className="text-xs md:text-sm text-gray-600">Streak 🔥</p>
        </div>
      </div>

      {/* Course Progress Details */}
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Course Progress Details</h3>
      <div className="space-y-3 md:space-y-4">
        {courseProgress.map((course, index) => (
          <div key={index} className="bg-white p-4 md:p-6 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
              <h4 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2">{course.title}</h4>
              {course.completed && (
                <span className="px-2 md:px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold whitespace-nowrap">
                  ✓ Completed
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-1 min-w-0">
                <div className="w-full h-2 md:h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-700 transition duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-base md:text-lg font-bold text-blue-700 min-w-fit text-sm md:text-base">
                {course.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
