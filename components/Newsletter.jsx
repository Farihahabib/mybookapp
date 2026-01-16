export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
          Stay Updated
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Subscribe to our newsletter for new releases, exclusive deals, and reading recommendations.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
