"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

// ✅ Define types for reviews & form data
interface Review {
  name: string;
  email: string;
  businessAddress: string;
  rating: number;
  message: string;
  date: string;
}

interface FormData {
  name: string;
  email: string;
  businessAddress: string;
  rating: number;
  message: string;
}

export default function SuccessStories() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessAddress: "",
    rating: 0,
    message: ""
  });

  // Load from localStorage
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // ✅ Fixed TypeScript typing for event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (star: number) => {
    setFormData({ ...formData, rating: star });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add to local UI immediately
    const newReview: Review = {
      ...formData,
      date: new Date().toISOString()
    };
    setReviews((prev) => [newReview, ...prev]);

    // Reset form
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      businessAddress: "",
      rating: 0,
      message: ""
    });

    // Let Netlify handle the actual submission
    const form = e.currentTarget;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString()
    });
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-pink-600">
          Success Stories
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition"
          >
            Share Your Experience
          </button>
        </div>

        <div className="space-y-6">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-500">
              No reviews yet. Be the first to share your experience!
            </p>
          ) : (
            reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md border border-gray-100 w-72 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex">
                  <div className="w-1/4 bg-gray-50 p-4 flex flex-col items-center text-center">
                    <FaUserCircle className="text-5xl text-gray-400 mb-2" />
                    <h3 className="font-bold text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                    <div className="flex text-yellow-500 mt-2">
                      {[...Array(5)].map((_, i) =>
                        i < Math.round(review.rating) ? (
                          <FaStar key={i} size={14} />
                        ) : (
                          <FaRegStar key={i} size={14} />
                        )
                      )}
                    </div>
                  </div>

                  <div className="w-3/4 p-4">
                    <p className="text-xs text-gray-600 mb-2">
                      {review.businessAddress}
                    </p>
                    <div className="border-t border-gray-200 pt-2">
                      <p className="text-gray-700 text-sm leading-snug">
                        "{review.message}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg w-96 relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                  ✖
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  Share Your Experience
                </h2>

                {/* ✅ Netlify Form */}
                <form
                  name="success-stories-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="success-stories-form"
                  />

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Rating
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={24}
                          className={`cursor-pointer ${
                            star <= (hover || formData.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          onClick={() => handleRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(null)}
                        />
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="rating"
                      value={formData.rating}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Review
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                      rows={3}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                  >
                    Submit Review
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
