'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
        
        {/* Journey Section */}
        <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 relative text-gray-900">
              Create Your Journey with us
              <span className="absolute left-0 bottom-[-4px] w-20 h-[3px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong className="text-red-500">Employment Assistance Programs Bangalore</strong> <em>Namma Uru Namma Hemme</em> is a community-driven charity and helping hands foundation committed to bringing positive change in the lives of those who need it most.
              Rooted deeply in our local culture and values, we strive to create opportunities, spread hope, and empower people to lead dignified and self-reliant lives.
            </p>
            <p className="leading-relaxed text-gray-700">
              Our initiatives include food distribution, education support, health awareness campaigns, and employment guidance. We work hand in hand with volunteers, donors, and local leaders to reach underserved communities and ensure that no one is left behind.
              Every project we undertake is guided by compassion, inclusivity, and a strong desire to uplift humanity.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/about1.png"
                alt="Office"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-gray-50 to-gray-100 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden group">
              <Image
                src="/images/about2.jpg"
                alt="Mission"
                layout="fill"
                objectFit="cover"
                className="z-0 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white px-6 text-xl font-medium text-center leading-relaxed">
                <p>
                  Our Mission: To uplift, empower, and support individuals and families by providing resources, guidance, and opportunities that enable them to build a better life.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Employment Assistance Programs Bangalore
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Founded with the belief that every helping hand can change a life, <span className="text-red-500 font-medium">Namma Uru Namma Hemme</span> started as a small initiative by passionate individuals from our town who wanted to give back to the community that raised them.
            </p>
            <p className="leading-relaxed text-gray-700">
              What began as local support for struggling families has grown into a trusted organization offering charity services, skill development programs, and job consultancy, helping people move from hardship to hope.
            </p>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
