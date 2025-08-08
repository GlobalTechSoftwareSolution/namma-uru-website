import React from "react";
import { FaBriefcase } from "react-icons/fa";

const WhatWeDoSection = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          What We Do Helping Hands Foundation
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          We support underprivileged individuals and families by providing essential
          resources, education assistance, and community welfare programs. Together, we aim
          to create a society where no one is left behind.
        </p>

        {/* Section: Job Consultancy */}
        <div className="text-left mt-8">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-black">
            <FaBriefcase className="text-brown-600 text-2xl" />
            <span>Job Consultancy & Career Guidance</span>
          </h3>

          <p className="text-gray-700 mt-2 mb-4">
            We connect job seekers with the right opportunities. Our dedicated career support team helps with:
          </p>

          <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
            <li>Resume building</li>
            <li>Skill development workshops</li>
            <li>Interview preparation</li>
            <li>Connecting with trusted employers</li>
          </ul>

          <p className="text-gray-700 mt-6">
            We specialize in assisting rural youth, women, and economically weaker sections to
            find stable employment and build brighter futures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
