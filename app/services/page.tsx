'use client'

import Image from "next/image";

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com";

export default function ServicesPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center">
        
        {/* Background Image */}
        <img
          src="/assets/servicesbanner.jpg"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Intelligence, applied creatively.
            </h1>

            {/* EMAIL CTA */}
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition"
            >
              Get a quote
            </a>
          </div>
        </div>
      </section>

      {/* ================= GIF + TEXT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: GIF */}
            <div>
              <img
                src="/assets/services.gif"
                alt="Our Solutions"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Solutions designed to move brands forward
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our solutions are wide and varied, but our approaches nimble and effective.
                We uncover deep human insights and help brands act on them. We calibrate teams
                specifically to needs, then tap additive resources as necessary—by design or
                by discovery. This gives us scale in ability and speed in delivery, for any
                size challenge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What We Offer
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            {/* Analytics */}
            <div>
              <div className="p-8 flex justify-center">
                <Image
                  src="/assets/analy.gif"
                  alt="Analytics"
                  width={260}
                  height={260}
                  priority
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Analytics.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                Accumulating and dissecting data, teased through technology,
                to uncover meaning in behaviors.
              </p>

              <ul className="space-y-3 text-gray-900 font-medium">
                <li>| Behavioral Science</li>
                <li>| Marketing Analytics</li>
                <li>| Customer Analytics</li>
                <li>| Digital Analytics</li>
                <li>| Social Analytics</li>
              </ul>
            </div>

            {/* Data Collection */}
            <div>
              <div className="flex justify-center">
                <Image
                  src="/assets/datacollection.gif"
                  alt="Data Collection"
                  width={260}
                  height={240}
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Collection.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                Offering data collection services across a wide range of sectors
                ranging from niche businesses to focused consumers.
              </p>

              <ul className="space-y-3 text-gray-900 font-medium">
                <li>| Qualitative Research</li>
                <li>| Quantitative Research</li>
                <li>| Business Research</li>
                <li>| Focus Groups</li>
              </ul>
            </div>

            {/* Insights */}
            <div>
              <div className="p-8 mb-8 flex justify-center">
                <Image
                  src="/assets/insights.gif"
                  alt="Insights"
                  width={280}
                  height={280}
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Insights.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                Deciphering data into drivers, augmenting deep human understanding
                to drive brands into real-world action.
              </p>

              <ul className="space-y-3 text-gray-900 font-medium">
                <li>| Brand Growth</li>
                <li>| Global Brand Tracking</li>
                <li>| Segmentation</li>
                <li>| Communications</li>
                <li>| Product & Service</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BRAND BANNER ================= */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center justify-center">

        <img
          src="/assets/brandbanner.jpg"
          alt="Brand Strategy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0" />

        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Make your brand stand out with us
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
            Introduce. Re-invent. Elevate your brand.
          </p>
        </div>
      </section>
    </>
  );
}
