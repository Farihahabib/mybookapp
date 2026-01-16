"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">Loading book details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-600 dark:text-red-400 mb-4">Book not found</p>
            <Link href="/items" className="text-zinc-900 dark:text-white hover:underline">
              Back to Items
            </Link>
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
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/items" 
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Items
          </Link>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative h-96 md:h-full bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.name}
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
                  {book.name}
                </h1>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                  by {book.author}
                </p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                    ${book.price}
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
                      Item ID:
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
