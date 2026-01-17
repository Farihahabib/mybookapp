"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

export default function BookDetailsPage({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated") {
      fetchBook();
    }
  }, [status]);

  const fetchBook = async () => {
    try {
      const id = (await params).id;
      const res = await fetch('/data/books.json');
      if (!res.ok) {
        throw new Error('Failed to fetch books');
      }
      const books = await res.json();
      const book = books.find(b => b.id === parseInt(id));
      
      if (!book) {
        throw new Error('Book not found');
      }
      
      setBook(book);
    } catch (error) {
      console.error('Error fetching book:', error);
      router.push("/books");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    alert('Delete functionality is disabled in this demo version. Books are loaded from a static JSON file.');
    return;
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 dark:bg-black">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/books" 
            className="inline-flex items-center text-amber-800 dark:text-zinc-400 hover:text-amber-950 dark:hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Books
          </Link>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden border border-amber-200 dark:border-zinc-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative h-96 md:h-full bg-amber-100 dark:bg-zinc-700 rounded-lg overflow-hidden flex items-center justify-center">
                {!imageError && book.image ? (
                  <Image
                    src={book.image}
                    alt={book.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-amber-400 dark:text-zinc-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-amber-700 dark:text-zinc-400">No image available</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-amber-700 dark:text-zinc-400 uppercase tracking-wide mb-2">
                  {book.genre}
                </span>
                
                <h1 className="text-4xl font-bold text-amber-950 dark:text-white mb-4">
                  {book.name}
                </h1>

                <p className="text-xl text-amber-800 dark:text-zinc-400 mb-6">
                  by {book.author}
                </p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-amber-900 dark:text-white">
                    ${book.price}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-amber-950 dark:text-white mb-3">
                    Description
                  </h2>
                  <p className="text-amber-800 dark:text-zinc-400 leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-amber-900 dark:text-zinc-300 w-24">
                      Author:
                    </span>
                    <span className="text-sm text-amber-800 dark:text-zinc-400">
                      {book.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-amber-900 dark:text-zinc-300 w-24">
                      Genre:
                    </span>
                    <span className="text-sm text-amber-800 dark:text-zinc-400">
                      {book.genre}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-amber-900 dark:text-zinc-300 w-24">
                      Book ID:
                    </span>
                    <span className="text-sm text-amber-800 dark:text-zinc-400">
                      #{book.id}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 bg-amber-700 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-lg font-semibold hover:bg-amber-800 dark:hover:bg-zinc-200 transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-6 border border-amber-300 dark:border-zinc-600 text-amber-900 dark:text-white py-3 rounded-lg font-semibold hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleDelete}
                    className="px-6 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 py-3 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
