export default function ItemCard({ name, description, category, price, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
      {/* Item Image */}
      <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-white">{name.charAt(0)}</span>
        )}
      </div>

      {/* Item Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
            {category}
          </span>
          {price && (
            <span className="font-bold text-purple-600 dark:text-purple-400">
              ${price}
            </span>
          )}
        </div>

        <button className="w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
}
