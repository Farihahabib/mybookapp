"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function BooksPage() {
  const { data: session, status } = useSession();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  const handleImageError = (bookId) => {
    setImageErrors(prev => ({ ...prev, [bookId]: true }));
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-amber-50 dark:bg-zinc-900">
          <p className="text-amber-900 dark:text-white text-xl">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 bg-amber-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-amber-950 dark:text-white mb-2">
              Browse Books
            </h1>
            <p className="text-amber-800 dark:text-zinc-400">
              Welcome back, {session?.user?.name || session?.user?.email}!
            </p>
          </div>

          {books.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-amber-800 dark:text-zinc-400 text-lg">
                No books available. Make sure the Express server is running on port 5000.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <div key={book.id} className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-amber-200 dark:border-zinc-700">
                  <div className="relative h-64 bg-amber-100 dark:bg-zinc-700 flex items-center justify-center">
                    {imageErrors[book.id] ? (
                      <svg className="w-16 h-16 text-amber-400 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ) : (
                      <Image
                        src={book.image}
                        alt={book.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        onError={() => handleImageError(book.id)}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-amber-700 dark:text-zinc-400">{book.genre}</span>
                    <h3 className="font-semibold text-lg text-amber-950 dark:text-white mb-2">{book.name}</h3>
                    <p className="text-amber-800 dark:text-zinc-400 mb-2">{book.author}</p>
                    <p className="text-amber-900 dark:text-white font-bold mb-4">${book.price}</p>
                    <div className="flex gap-2">
                      <Link 
                        href={`/books/${book.id}`}
                        className="flex-1 text-center bg-amber-700 dark:bg-white text-white dark:text-zinc-900 py-2 rounded-lg font-semibold hover:bg-amber-800 dark:hover:bg-zinc-200 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="px-3 border border-amber-300 dark:border-zinc-600 text-amber-900 dark:text-white rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
