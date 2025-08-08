import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Why Choose Namma Uru Namma Hemme?
        </h2>
        <div className="h-1 w-48 bg-pink-600 mx-auto mb-12"></div>

        <div className="space-y-10 text-lg">
          {/* Local Roots, Big Impact */}
          <div>
            <h3 className="font-bold text-xl">Local Roots, Big Impact</h3>
            <p className="mt-2">
              At <em>Namma Uru Namma Hemme</em>, we are deeply connected to the communities we serve. We understand
              their struggles, values, and aspirations. Since we are part of these communities, our efforts are always
              rooted in real needs. As a result, our local approach creates lasting change. It not only uplifts
              individuals but also strengthens entire neighborhoods.
            </p>
          </div>

          {/* Transparent & Trustworthy */}
          <div>
            <h3 className="font-bold text-xl">Transparent & Trustworthy</h3>
            <p className="mt-2">
              Transparency is at the core of everything we do. Each of our initiatives is community-driven and openly
              managed. We always maintain honest communication with beneficiaries, volunteers, and donors.
              Furthermore, our reports and updates ensure that resources are used ethically. Because of this, we earn
              the trust of everyone involved and build long-term relationships.
            </p>
          </div>

          {/* Complete Support */}
          <div>
            <h3 className="font-bold text-xl">Complete Support</h3>
            <p className="mt-2">
              We believe that true empowerment comes through complete support. That’s why we offer help at every stage.
              From emotional care to skill-building and job assistance, we walk with people through their journey.
              Additionally, our team provides constant encouragement and guidance. This helps individuals not just
              survive but thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
