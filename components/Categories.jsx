export default function Categories() {
  const categories = [
    "Fiction", "Non-Fiction", "Mystery", "Romance", 
    "Science Fiction", "Biography", "Self-Help", "History"
  ];

  return (
    <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
              <p className="font-semibold text-zinc-900 dark:text-white">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
