import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-900 dark:bg-black text-amber-50 py-12 px-4 border-t border-amber-800 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-50">BookShop</h3>
            <p className="text-amber-200 dark:text-zinc-400">Your destination for great books and reading experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-50">Quick Links</h4>
            <ul className="space-y-2 text-amber-200 dark:text-zinc-400">
              <li><Link href="/books" className="hover:text-amber-50 dark:hover:text-white transition-colors">Browse Books</Link></li>
              <li><Link href="/contact" className="hover:text-amber-50 dark:hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/login" className="hover:text-amber-50 dark:hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-50">Customer Service</h4>
            <ul className="space-y-2 text-amber-200 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-amber-50 dark:hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-amber-50 dark:hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-50 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-50">Follow Us</h4>
            <ul className="space-y-2 text-amber-200 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-amber-50 dark:hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-amber-50 dark:hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-amber-50 dark:hover:text-white transition-colors">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 dark:border-zinc-800 pt-8 text-center text-amber-200 dark:text-zinc-400">
          <p>&copy; 2026 BookShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
