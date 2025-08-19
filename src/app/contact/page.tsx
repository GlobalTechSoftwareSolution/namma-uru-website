"use client"
import { useState, useRef, FormEvent, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  const [popup, setPopup] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  })

  const form = useRef<HTMLFormElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ WhatsApp Redirect
  const sendToWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, phone, email, message } = formData
    const yourNumber = "919844281875"

    const text = `Hello, I want to get in touch.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`

    const url = `https://wa.me/${yourNumber}?text=${text}`

    window.open(url, "_blank")

    setPopup({
      show: true,
      message: "✅ Opening WhatsApp...",
      type: "success"
    })

    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup(prev => ({ ...prev, show: false }))
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [popup.show])

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">

      {/* Contact Form */}
      <div className="bg-white/95 backdrop-blur-lg p-10 rounded-2xl shadow-2xl relative w-full max-w-2xl border border-yellow-400 hover:shadow-yellow-500/50 transition duration-500">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-b-2xl"></div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Get in Touch with Namma Uru Namma Hemme
          </span>
        </h2>

        <form ref={form} onSubmit={sendToWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none col-span-2 md:col-span-1"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none col-span-2 md:col-span-1"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none col-span-2"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none col-span-2"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12 .1C5.52.1.1 5.52.1 12c0 2.11.55 4.18 1.61 6.01L0 24l6.2-1.62A11.9 11.9 0 0 0 12 23.9c6.48 0 11.9-5.42 11.9-11.9 0-3.18-1.24-6.18-3.48-8.52zm-8.52 18.4c-2.06 0-4.08-.55-5.86-1.59l-.42-.25-3.69.96.99-3.59-.27-.43a9.86 9.86 0 0 1-1.52-5.32c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.46-4.44 9.9-9.9 9.9zm5.43-7.39c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.15-.27-.23-.58-.38z" />
            </svg>
            SUBMIT
          </button>
        </form>
      </div>

      {/* Popup */}
      {popup.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl text-white font-medium animate-bounce transition-opacity duration-500 ${
            popup.type === "success"
              ? "bg-gradient-to-r from-green-400 to-green-600"
              : "bg-gradient-to-r from-red-400 to-red-600"
          }`}
        >
          {popup.message}
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}
