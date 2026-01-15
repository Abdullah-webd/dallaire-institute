"use client"

import { useState } from "react"

export default function ExamsTab() {
  const [exams] = useState([
    {
      id: 1,
      title: "Midterm: Child Protection Module",
      course: "Child Protection in Armed Conflict",
      date: "Feb 12, 2024",
      time: "10:00 AM",
      duration: "2 hours",
      questions: 50,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Final: Peace Building Fundamentals",
      course: "Peace Building Fundamentals",
      date: "Feb 28, 2024",
      time: "2:00 PM",
      duration: "3 hours",
      questions: 60,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Quiz: Early Warning Systems",
      course: "Early Warning Systems & Analysis",
      date: "Jan 20, 2024",
      time: "3:00 PM",
      duration: "1 hour",
      questions: 30,
      status: "completed",
      score: 92,
    },
    {
      id: 4,
      title: "Assessment: Humanitarian Ethics",
      course: "Humanitarian Operations & Ethics",
      date: "Feb 5, 2024",
      time: "11:00 AM",
      duration: "1.5 hours",
      questions: 40,
      status: "scheduled",
    },
  ])

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Exams & Assessments</h2>
        <p className="text-gray-700">Monitor your academic assessments and results</p>
      </div>

      <div className="space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white p-6 border-l-4 border-blue-700 rounded-lg hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{exam.title}</h3>
                <p className="text-sm text-gray-600">{exam.course}</p>
              </div>
              <div className="flex gap-2">
                {exam.status === "completed" && (
                  <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold">
                    Completed - {exam.score}%
                  </span>
                )}
                {exam.status === "upcoming" && (
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold">
                    Upcoming
                  </span>
                )}
                {exam.status === "scheduled" && (
                  <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold">
                    Scheduled
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Date</p>
                <p className="font-semibold text-gray-900">{exam.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Time</p>
                <p className="font-semibold text-gray-900">{exam.time}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Duration</p>
                <p className="font-semibold text-gray-900">{exam.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Questions</p>
                <p className="font-semibold text-gray-900">{exam.questions} questions</p>
              </div>
            </div>

            {exam.status !== "completed" && (
              <button className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-semibold">
                {exam.status === "upcoming" ? "Start Exam" : "View Details"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
