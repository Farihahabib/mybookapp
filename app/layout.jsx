import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookShop - Your Online Bookstore",
  description: "Discover your next great read at BookShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                className: 'dark:bg-zinc-800 dark:text-white',
              }}
            />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
