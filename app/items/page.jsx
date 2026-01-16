"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ItemsPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">Loading books...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
            <p className="text-zinc-600 dark:text-zinc-400">Make sure the Express server is running on port 5000</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Run: npm run server</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Book Collection
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Browse our complete collection of books
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div key={book.id} className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-zinc-200 dark:bg-zinc-700">
                  <Image
                    src={book.image}
                    alt={book.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 4}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                    {book.genre}
                  </span>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-1 mt-2">
                    {book.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    by {book.author}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xl font-bold text-zinc-900 dark:text-white">
                      ${book.price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/items/${book.id}`}
                      className="flex-1 text-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => alert('Added to cart!')}
                      className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                    >
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
