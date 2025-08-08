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
      <div className="bg-white text-gray-800">
       

      {/* Journey Section */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 relative">
            Create Your Journey with us
            <span className="absolute left-0 bottom-[-4px] w-16 h-[2px] bg-red-500 block" />
          </h2>
          <p className="mb-4">
            <strong>Employment Assistance Programs Bangalore</strong> <em>Namma Uru Namma Hemme</em> is a community-driven charity and helping hands foundation committed to bringing positive change in the lives of those who need it most. 
            Rooted deeply in our local culture and values, we strive to create opportunities, spread hope, and empower people to lead dignified and self-reliant lives.
          </p>
          <p>
            Our initiatives include food distribution, education support, health awareness campaigns, and employment guidance. We work hand in hand with volunteers, donors, and local leaders to reach underserved communities and ensure that no one is left behind. 
            Every project we undertake is guided by compassion, inclusivity, and a strong desire to uplift humanity.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/about1.png" // replace with your uploaded image
            alt="Office"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/about2.jpg" // replace with your uploaded image
              alt="Mission"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-6 text-xl font-medium">
              <p>
                Our Mission: To uplift, empower, and support individuals and families by providing resources, guidance, and opportunities that enable them to build a better life.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Employment Assistance Programs Bangalore
          </h2>
          <p className="mb-4">
            Founded with the belief that every helping hand can change a life, Namma Uru Namma Hemme started as a small initiative by passionate individuals from our town who wanted to give back to the community that raised them.
          </p>
          <p>
            What began as local support for struggling families has grown into a trusted organization offering charity services, skill development programs, and job consultancy, helping people move from hardship to hope.
          </p>
        </motion.div>
      </section>
      <Footer/>
      </div>
    </>
  );
};

export default AboutPage;
