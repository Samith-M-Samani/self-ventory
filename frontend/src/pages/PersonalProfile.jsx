import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function PersonalProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          {/* Profile Content */}
          <div className="px-6 pb-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-white dark:border-gray-800 flex items-center justify-center text-4xl font-bold text-white">
                JD
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  John Doe
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  john.doe@example.com
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Software Developer • Active since 2024
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
              >
                {isEditing ? "Save" : "Edit Profile"}
              </button>
            </div>

            {/* Profile Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* About */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  About
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate developer with interest in web technologies and user experience design.
                </p>
              </div>

              {/* Stats */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Stats
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">42</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tasks Completed</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">128</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Email:</span>
                  <span className="text-gray-900 dark:text-white">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Phone:</span>
                  <span className="text-gray-900 dark:text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Location:</span>
                  <span className="text-gray-900 dark:text-white">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
