import Navbar from "../components/Navbar.jsx";
import ItemCard from "../components/ItemCard.jsx";

export default function Items() {
  const items = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', category: 'Electronics', price: 1299 },
    { id: 2, name: 'Mouse', description: 'Wireless mouse', category: 'Accessories', price: 49 },
    { id: 3, name: 'Keyboard', description: 'Mechanical keyboard', category: 'Accessories', price: 129 },
    { id: 4, name: 'Monitor', description: '4K display monitor', category: 'Electronics', price: 399 },
    { id: 5, name: 'USB-C Cable', description: 'Fast charging cable', category: 'Accessories', price: 29 },
    { id: 6, name: 'Headphones', description: 'Noise-cancelling headphones', category: 'Audio', price: 199 },
    { id: 7, name: 'Webcam', description: '1080p HD webcam', category: 'Electronics', price: 89 },
    { id: 8, name: 'Stand', description: 'Adjustable laptop stand', category: 'Accessories', price: 59 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Items
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Browse and manage your items.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
