import Image from "next/image";

export default function FeaturedBooks() {
  const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$16.99", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: "$15.99", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop" },
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides", price: "$13.99", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop" },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">{book.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">{book.author}</p>
                <p className="text-zinc-900 dark:text-white font-bold">{book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
