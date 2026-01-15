"use client"

import { useState } from "react"

export default function CoursesTab() {
  const [courses] = useState([
    {
      id: 1,
      title: "Child Protection in Armed Conflict",
      level: "Advanced",
      instructor: "Dr. Sarah Chen",
      students: 234,
      lessons: 12,
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "Peace Building Fundamentals",
      level: "Intermediate",
      instructor: "Prof. James Okonkwo",
      students: 456,
      lessons: 10,
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Early Warning Systems & Analysis",
      level: "Advanced",
      instructor: "Dr. Michael Zhang",
      students: 189,
      lessons: 15,
      duration: "10 weeks",
    },
    {
      id: 4,
      title: "Humanitarian Operations & Ethics",
      level: "Beginner",
      instructor: "Aisha Koroma",
      students: 567,
      lessons: 8,
      duration: "5 weeks",
    },
    {
      id: 5,
      title: "Conflict Resolution Strategies",
      level: "Intermediate",
      instructor: "Dr. Emma Peterson",
      students: 312,
      lessons: 11,
      duration: "7 weeks",
    },
    {
      id: 6,
      title: "Security Policy & Implementation",
      level: "Advanced",
      instructor: "Prof. Ahmed Hassan",
      students: 198,
      lessons: 13,
      duration: "9 weeks",
    },
    {
      id: 7,
      title: "Peace Education Fundamentals",
      level: "Beginner",
      instructor: "Maria Rodriguez",
      students: 678,
      lessons: 7,
      duration: "4 weeks",
    },
    {
      id: 8,
      title: "Regional Crisis Management",
      level: "Advanced",
      instructor: "Dr. Kofi Mensah",
      students: 145,
      lessons: 16,
      duration: "12 weeks",
    },
  ])

  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredCourses =
    selectedLevel === "all" ? courses : courses.filter((c) => c.level.toLowerCase() === selectedLevel)

  return (
    <div className="space-y-6 md:space-y-8 w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">Courses & Modules</h2>
        <p className="text-sm md:text-base text-gray-700">
          Explore our comprehensive curriculum designed by global peace experts.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 md:mb-8 flex gap-2 md:gap-3 overflow-x-auto pb-2">
        {["all", "beginner", "intermediate", "advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-3 md:px-4 py-2 rounded-full whitespace-nowrap transition text-sm md:text-base ${
              selectedLevel === level
                ? "bg-blue-700 text-white font-bold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
          >
            {/* Image */}
            <div className="h-40 md:h-48 overflow-hidden relative bg-gradient-to-r from-blue-400 to-blue-600">
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold opacity-20">
                📚
              </div>
              <span className="absolute top-3 md:top-4 right-3 md:right-4 px-2 md:px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-bold">
                {course.level}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-gray-900 group-hover:text-blue-700 transition line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">by {course.instructor}</p>

              <div className="space-y-2 md:space-y-3 mb-4 md:mb-4 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📚</span>
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>👥</span>
                  <span>{course.students} students</span>
                </div>
              </div>

              <button className="w-full py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition text-sm md:text-base">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
