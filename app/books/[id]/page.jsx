import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function BookDetailsPage({ params }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;

  const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99", genre: "Fiction", description: "A dazzling novel about all the choices that go into a life well lived. Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$16.99", genre: "Self-Help", description: "An easy and proven way to build good habits and break bad ones. No matter your goals, Atomic Habits offers a proven framework for improving every day.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: "$15.99", genre: "Science Fiction", description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop" },
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides", price: "$13.99", genre: "Mystery", description: "A woman's act of violence against her husband and the therapist obsessed with uncovering her motive. The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband.", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop" },
    { id: 5, title: "Educated", author: "Tara Westover", price: "$17.99", genre: "Biography", description: "A memoir about a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University. An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family.", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop" },
    { id: 6, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$15.99", genre: "Fiction", description: "A coming-of-age story of a young girl raised by the marshlands of the South. For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", price: "$18.99", genre: "History", description: "A brief history of humankind from the Stone Age to the modern age. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms?", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop" },
    { id: 8, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "$14.99", genre: "Romance", description: "A reclusive Hollywood icon opens up about her glamorous and scandalous life. Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop" },
  ];

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    redirect("/books");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/books" 
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Books
          </Link>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative h-96 md:h-full bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                  {book.genre}
                </span>
                
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  {book.title}
                </h1>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                  by {book.author}
                </p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                    {book.price}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    Description
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 w-24">
                      Author:
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {book.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 w-24">
                      Genre:
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {book.genre}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 w-24">
                      Book ID:
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      #{book.id}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-6 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white py-3 rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
