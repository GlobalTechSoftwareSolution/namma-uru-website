'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutServices() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        
       {/* ABOUT HERO SECTION */}
<section className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/hero.jpg" // replace with your image path
    alt="Hero Background"
    fill
    priority
    className="object-cover object-[50%_10%]" // centers horizontally, shifts image down
  />
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Centered Text */}
  <motion.h1
    className="relative z-10 text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    About Us Employment <br /> Assistance Programs Bangalore
  </motion.h1>
</section>



        {/* ABOUT SECTION */}
        <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-gradient-to-r from-indigo-50 to-purple-50">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold leading-tight mb-4 border-b-4 border-indigo-600 inline-block">
              Create Your Journey with Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-indigo-700">Employment Assistance Programs Bangalore</strong> <em className="text-pink-600">Namma Uru Namma Hemme</em> is a community-driven charity foundation committed to bringing positive change in the lives of those who need it most.
            </p>
            <p className="text-lg text-gray-700">
              Our initiatives include food distribution, education support, health awareness campaigns, and employment guidance. We work hand in hand with volunteers, donors, and local leaders to reach underserved communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/images/service.jpg"
              alt="Office Space"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border-4 border-white"
              priority
            />
          </motion.div>
        </section>

        {/* RESUME & INTERVIEW SUPPORT SECTION */}
        <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/resume.jpg"
                  alt="Resume and Interview Support"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl border-4 border-white"
                />
              </motion.div>
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Resume & Interview Support
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  We assist candidates in creating professional resumes and offer mock interview sessions to boost confidence and performance.
                </motion.p>
                <div className="space-y-4">
                  {[
                    "Profile Understanding",
                    "Resume Building",
                    "Resume Review & Improvement",
                    "Interview Preparation Sessions",
                    "Interview Tips & Guidance",
                    "Ongoing Feedback & Support"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-lg text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">Get Started</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-blue-100 to-indigo-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/images/mission.jpg"
              alt="Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border-4 border-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-4 text-indigo-800">
              Employment Assistance Programs Bangalore
            </h2>
            <p className="text-gray-700 mb-4">
              Founded with the belief that every helping hand can change a life, Namma Uru Namma Hemme began as a small initiative by passionate locals.
            </p>
            <p className="text-gray-700">
              What started as local support has grown into a trusted organization offering charity services, skill development, and job consultancy.
            </p>
          </motion.div>
        </section>

        {/* SERVICES DETAILS SECTION */}
        <section className="py-16 px-6 md:px-20 bg-gradient-to-tr from-purple-50 to-indigo-50">
          <motion.h2
            className="text-3xl font-bold mb-6 text-indigo-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Lives, Building Futures <br /> Career Counseling in Bengaluru
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            At <em className="text-indigo-600">Namma Uru Namma Hemme</em>, we uplift individuals, strengthen communities, and create sustainable opportunities.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We understand every journey is unique. Our career counseling includes personalized guidance, workshops, and job readiness training.
          </motion.p>
        </section>
      </div>
      <Footer />
    </>
  );
}
