"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Show success toast
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 dark:bg-black">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-amber-950 dark:text-white mb-8">
            Contact Us
          </h1>
          
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-amber-200 dark:border-zinc-700 mb-8">
            <h2 className="text-2xl font-semibold text-amber-950 dark:text-white mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-white mb-2">Email</h3>
                <p className="text-amber-800 dark:text-zinc-400">support@bookshop.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-white mb-2">Phone</h3>
                <p className="text-amber-800 dark:text-zinc-400">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-white mb-2">Address</h3>
                <p className="text-amber-800 dark:text-zinc-400">
                  123 Book Street<br />
                  Reading City, RC 12345<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-white mb-2">Business Hours</h3>
                <p className="text-amber-800 dark:text-zinc-400">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-amber-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-amber-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-amber-900 dark:text-white"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-700 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-lg font-semibold hover:bg-amber-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
