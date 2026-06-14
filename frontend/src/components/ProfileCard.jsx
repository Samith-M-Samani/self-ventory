import { useState } from 'react';

export default function ProfileCard({ name, role, email, avatar, isFollowing = false }) {
  const [following, setFollowing] = useState(isFollowing);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Cover */}
      <div className="h-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>

      {/* Content */}
      <div className="px-6 pb-6 -mt-8 text-center">
        {/* Avatar */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-white dark:border-gray-800 flex items-center justify-center text-white text-xl font-bold">
          {avatar || name.charAt(0)}
        </div>

        {/* Name and Role */}
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {role}
        </p>

        {/* Email */}
        {email && (
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 truncate">
            {email}
          </p>
        )}

        {/* Action Button */}
        <button
          onClick={() => setFollowing(!following)}
          className={`w-full py-2 px-4 rounded-lg transition font-medium text-sm ${
            following
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {following ? '✓ Following' : 'Follow'}
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-gray-100 dark:bg-gray-700 py-2 rounded">
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
              247
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Tasks
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 py-2 rounded">
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
              542
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
