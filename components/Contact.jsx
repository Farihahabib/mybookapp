export default function Contact() {
  return (
    <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">Email: info@bookshop.com</p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">Phone: (555) 123-4567</p>
            <p className="text-zinc-600 dark:text-zinc-400">Address: 123 Book Street, Reading City, RC 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Store Hours</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">Monday - Friday: 9am - 8pm</p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">Saturday: 10am - 6pm</p>
            <p className="text-zinc-600 dark:text-zinc-400">Sunday: 11am - 5pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
