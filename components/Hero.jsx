import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-black py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-950 dark:text-white mb-6">
          Discover Your Next Great Read
        </h1>
        <p className="text-xl text-amber-800 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          Explore thousands of books across all genres. From bestsellers to hidden gems, find your perfect story.
        </p>
        <Link href="/books" className="inline-block bg-amber-700 dark:bg-white text-white dark:text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-800 dark:hover:bg-zinc-200 transition-colors">
          Browse Collection
        </Link>
      </div>
    </section>
  );
}
