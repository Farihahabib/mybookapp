import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 dark:bg-black">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-amber-950 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-amber-200 dark:border-zinc-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, shipping address, and payment information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-amber-800 dark:text-zinc-400 space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send you promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                5. Cookies
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                6. Your Rights
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-amber-800 dark:text-zinc-400 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-4">
                8. Contact Us
              </h2>
              <p className="text-amber-800 dark:text-zinc-400">
                If you have any questions about this privacy policy, please contact us at privacy@bookshop.com
              </p>
            </section>
            
            <div className="pt-6 border-t border-amber-200 dark:border-zinc-700">
              <p className="text-sm text-amber-700 dark:text-zinc-500">
                Last updated: January 17, 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
