"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    genre: "",
    image: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Redirect if not authenticated
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Add book functionality is disabled in this demo version. Books are loaded from a static JSON file.');
    return;
  };

      setTimeout(() => {
        router.push('/books');
      }, 2000);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to add book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 dark:bg-black">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-amber-200 dark:border-zinc-700">
            <h1 className="text-3xl font-bold text-amber-950 dark:text-white mb-2">
              Add New Book
            </h1>
            <p className="text-amber-800 dark:text-zinc-400 mb-8">
              Fill in the details to add a new book to the collection
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-600 dark:text-green-400">Book added successfully! Redirecting...</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                  Book Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                  placeholder="Enter book name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                  placeholder="Enter author name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                  placeholder="Enter book description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                    Genre *
                  </label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                  >
                    <option value="">Select genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="History">History</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-zinc-300 mb-2">
                  Image URL (optional)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white focus:ring-2 focus:ring-amber-500 dark:focus:ring-zinc-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-amber-700 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-lg font-semibold hover:bg-amber-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Adding...' : 'Add Book'}
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/books')}
                  className="px-6 border border-amber-300 dark:border-zinc-600 text-amber-900 dark:text-white py-3 rounded-lg font-semibold hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
