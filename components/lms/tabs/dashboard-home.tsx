export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-blue-600 font-semibold mb-2">In Progress</p>
          <h3 className="text-3xl font-bold text-blue-700">3</h3>
          <p className="text-gray-600">Courses</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <p className="text-sm text-green-600 font-semibold mb-2">Completed</p>
          <h3 className="text-3xl font-bold text-green-700">5</h3>
          <p className="text-gray-600">Courses</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <p className="text-sm text-purple-600 font-semibold mb-2">Average Score</p>
          <h3 className="text-3xl font-bold text-purple-700">87%</h3>
          <p className="text-gray-600">Overall</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600" />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Introduction to Peace Studies</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-700 h-2 rounded-full" style={{ width: "65%" }} />
              </div>
              <p className="text-sm text-gray-600">65% Complete</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-32 bg-gradient-to-r from-green-400 to-green-600" />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Child Protection Frameworks</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-700 h-2 rounded-full" style={{ width: "45%" }} />
              </div>
              <p className="text-sm text-gray-600">45% Complete</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-700">14</div>
            <div>
              <p className="font-semibold text-gray-900">Peace Studies Webinar</p>
              <p className="text-sm text-gray-600">Jan 14, 2026 - 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-700">20</div>
            <div>
              <p className="font-semibold text-gray-900">Assignment Deadline</p>
              <p className="text-sm text-gray-600">Jan 20, 2026 - 11:59 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
