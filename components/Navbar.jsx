"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    signOut({ callbackUrl: "/" });
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-amber-50 dark:bg-zinc-900 border-b border-amber-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-amber-900 dark:text-white">
            BookShop
          </Link>
          <div className="flex gap-6 items-center">
            <Link 
              href="/books" 
              className={`text-amber-800 dark:text-zinc-300 hover:text-amber-950 dark:hover:text-white transition-colors relative ${
                isActive('/books') ? 'after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-amber-700 dark:after:bg-white' : ''
              }`}
            >
              Books
            </Link>
            <Link 
              href="/contact" 
              className={`text-amber-800 dark:text-zinc-300 hover:text-amber-950 dark:hover:text-white transition-colors relative ${
                isActive('/contact') ? 'after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-amber-700 dark:after:bg-white' : ''
              }`}
            >
              Contact
            </Link>
            {session && (
              <Link 
                href="/add-item" 
                className={`text-amber-800 dark:text-zinc-300 hover:text-amber-950 dark:hover:text-white transition-colors relative ${
                  isActive('/add-item') ? 'after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-amber-700 dark:after:bg-white' : ''
                }`}
              >
                Add Item
              </Link>
            )}
            {session ? (
              <>
                <span className="text-amber-700 dark:text-zinc-400 text-sm">
                  {session.user?.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-amber-800 dark:text-zinc-300 hover:text-amber-950 dark:hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="text-amber-800 dark:text-zinc-300 hover:text-amber-950 dark:hover:text-white transition-colors">
                Login
              </Link>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
