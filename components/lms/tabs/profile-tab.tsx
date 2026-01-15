"use client"

import { useState } from "react"

export default function ProfileTab() {
  const [profile] = useState({
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Peace Studies Scholar",
    joinDate: "January 2024",
    location: "Toronto, Canada",
    bio: "Passionate about conflict prevention and child protection in global peace initiatives.",
    avatar: "SC",
  })

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Profile & Settings</h2>
      </div>

      {/* Profile Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 rounded-full bg-blue-700 flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
            {profile.avatar}
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2 text-gray-900">{profile.name}</h3>
            <p className="text-blue-700 font-semibold mb-4">{profile.role}</p>
            <p className="text-gray-700 mb-6">{profile.bio}</p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">
                <span className="text-gray-600">Email:</span> {profile.email}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-600">Location:</span> {profile.location}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-600">Member Since:</span> {profile.joinDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Account Settings</h3>
          <div className="space-y-4">
            <button className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-700 text-left transition hover:bg-blue-50">
              <p className="font-semibold text-gray-900 mb-1">Change Password</p>
              <p className="text-sm text-gray-600">Update your security credentials</p>
            </button>
            <button className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-700 text-left transition hover:bg-blue-50">
              <p className="font-semibold text-gray-900 mb-1">Email Preferences</p>
              <p className="text-sm text-gray-600">Manage notification settings</p>
            </button>
            <button className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-700 text-left transition hover:bg-blue-50">
              <p className="font-semibold text-gray-900 mb-1">Privacy Settings</p>
              <p className="text-sm text-gray-600">Control your data and visibility</p>
            </button>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Learning Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900">Enable AI Recommendations</span>
              <div className="w-12 h-6 bg-blue-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-blue-700 rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900">Course Notifications</span>
              <div className="w-12 h-6 bg-blue-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-blue-700 rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-red-700">Account Actions</h3>
          <button className="w-full p-4 rounded-lg border-2 border-red-200 text-red-700 hover:bg-red-100 transition font-semibold">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
