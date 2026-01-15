"use client"

import { useState } from "react"

export default function AssignmentsTab() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Essay: Case Study Analysis",
      course: "Child Protection in Armed Conflict",
      dueDate: "Jan 30, 2024",
      status: "due-soon",
      progress: 50,
    },
    {
      id: 2,
      title: "Discussion: Peace Building Approaches",
      course: "Peace Building Fundamentals",
      dueDate: "Jan 25, 2024",
      status: "overdue",
      progress: 0,
    },
    {
      id: 3,
      title: "Project: Early Warning System Design",
      course: "Early Warning Systems & Analysis",
      dueDate: "Feb 15, 2024",
      status: "in-progress",
      progress: 75,
    },
    {
      id: 4,
      title: "Research Paper: Humanitarian Ethics",
      course: "Humanitarian Operations & Ethics",
      dueDate: "Feb 20, 2024",
      status: "not-started",
      progress: 0,
    },
    {
      id: 5,
      title: "Quiz: Child Soldier Prevention",
      course: "Child Protection in Armed Conflict",
      dueDate: "Feb 5, 2024",
      status: "due-soon",
      progress: 0,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue":
        return "bg-red-50 border-red-200 text-red-700"
      case "due-soon":
        return "bg-yellow-50 border-yellow-200 text-yellow-700"
      case "in-progress":
        return "bg-blue-50 border-blue-200 text-blue-700"
      case "not-started":
        return "bg-gray-50 border-gray-200 text-gray-700"
      default:
        return "bg-green-50 border-green-200 text-green-700"
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      overdue: "Overdue",
      "due-soon": "Due Soon",
      "in-progress": "In Progress",
      "not-started": "Not Started",
    }
    return labels[status] || status
  }

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Assignments</h2>
        <p className="text-gray-700">Track and submit your coursework</p>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{assignment.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{assignment.course}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4 border ${getStatusColor(assignment.status)}`}
              >
                {getStatusLabel(assignment.status)}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Due Date</p>
                <p className="font-semibold text-blue-700">{assignment.dueDate}</p>
              </div>
              {assignment.progress > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-600">Progress</p>
                    <span className="text-sm font-bold text-blue-700">{assignment.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-700" style={{ width: `${assignment.progress}%` }} />
                  </div>
                </div>
              )}
            </div>

            <button className="mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-semibold">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
