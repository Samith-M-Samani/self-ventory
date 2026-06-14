import Navbar from "../components/Navbar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";

export default function People() {
  const people = [
    { id: 1, name: 'John Doe', role: 'Software Developer', email: 'john@example.com', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager', email: 'jane@example.com', avatar: 'JS' },
    { id: 3, name: 'Mike Johnson', role: 'UI Designer', email: 'mike@example.com', avatar: 'MJ' },
    { id: 4, name: 'Sarah Williams', role: 'Data Analyst', email: 'sarah@example.com', avatar: 'SW' },
    { id: 5, name: 'Alex Brown', role: 'DevOps Engineer', email: 'alex@example.com', avatar: 'AB' },
    { id: 6, name: 'Emma Davis', role: 'QA Tester', email: 'emma@example.com', avatar: 'ED' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          People
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Connect with other team members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <ProfileCard
              key={person.id}
              name={person.name}
              role={person.role}
              email={person.email}
              avatar={person.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
