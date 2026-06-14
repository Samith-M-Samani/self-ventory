import Navbar from "../components/Navbar.jsx";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Manage all your tasks in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="h-3 bg-purple-500 rounded w-3/4 mb-4"></div>
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-3"></div>
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
