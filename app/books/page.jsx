import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function BooksPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99", genre: "Fiction", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$16.99", genre: "Self-Help", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: "$15.99", genre: "Science Fiction", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop" },
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides", price: "$13.99", genre: "Mystery", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop" },
    { id: 5, title: "Educated", author: "Tara Westover", price: "$17.99", genre: "Biography", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop" },
    { id: 6, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$15.99", genre: "Fiction", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", price: "$18.99", genre: "History", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop" },
    { id: 8, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "$14.99", genre: "Romance", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              Browse Books
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Welcome back, {session.user?.name || session.user?.email}!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.id} className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-zinc-200 dark:bg-zinc-700">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{book.genre}</span>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">{book.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">{book.author}</p>
                  <p className="text-zinc-900 dark:text-white font-bold mb-4">{book.price}</p>
                  <div className="flex gap-2">
                    <Link 
                      href={`/books/${book.id}`}
                      className="flex-1 text-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-2 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      View Details
                    </Link>
                    <button className="px-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
