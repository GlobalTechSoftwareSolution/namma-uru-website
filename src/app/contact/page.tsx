"use client"
import { useState, useRef, useEffect, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FaCheckCircle, FaTimesCircle, FaTimes, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [popup, setPopup] = useState<{
    show: boolean
    message: string
    type: "success" | "error"
  }>({
    show: false,
    message: "",
    type: "success"
  })

  const [progress, setProgress] = useState(100)
  const form = useRef<HTMLFormElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setPopup({
            show: true,
            message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
            type: "success"
          })
          setFormData({ name: "", phone: "", email: "", message: "" })
        },
        () => {
          setPopup({
            show: true,
            message: "We apologize, but there was an error sending your message. Please try again or contact us directly.",
            type: "error"
          })
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  useEffect(() => {
    if (popup.show) {
      setProgress(100)
      const interval = setInterval(() => {
        setProgress(prev => Math.max(prev - 0.33, 0))
      }, 16) // ~60fps

      const timer = setTimeout(() => {
        setPopup(prev => ({ ...prev, show: false }))
      }, 5000)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }
  }, [popup.show])

  const closePopup = () => {
    setPopup(prev => ({ ...prev, show: false }))
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-amber-600">Namma Uru Namma Hemme</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us and let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center justify-center">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                  <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Popup Notification */}
        {popup.show && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={closePopup}
            ></div>
            
            {/* Notification Card */}
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-95 animate-scale-in">
              {/* Header with gradient */}
              <div className={`h-2 w-full ${popup.type === "success" ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'}`}></div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start">
                  {/* Icon */}
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${popup.type === "success" ? 'bg-green-100' : 'bg-red-100'}`}>
                    {popup.type === "success" ? (
                      <FaCheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <FaTimesCircle className="h-6 w-6 text-red-600" />
                    )}
                  </div>
                  
                  {/* Message */}
                  <div className="ml-4 flex-1">
                    <h3 className={`text-lg font-semibold ${popup.type === "success" ? 'text-green-800' : 'text-red-800'}`}>
                      {popup.type === "success" ? 'Message Sent Successfully' : 'Something Went Wrong'}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm">{popup.message}</p>
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={closePopup}
                    className="ml-4 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <FaTimes className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${popup.type === "success" ? 'bg-green-500' : 'bg-red-500'} transition-all duration-100`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="px-6 py-4 bg-gray-50 flex justify-end">
                <button
                  onClick={closePopup}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    popup.type === "success" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "bg-red-600 hover:bg-red-700"
                  } text-white transition-colors`}
                >
                  {popup.type === "success" ? "Continue" : "Try Again"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />

      <style jsx global>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}