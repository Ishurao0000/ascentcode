'use client'

import { Button } from "@/components/ui/button";

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com";

export default function AboutPreview() {
  return (
    <section
      className="relative py-28 text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/whoweare/whoweare.avif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Who We Are
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-200">
          Ascent Standard is a modern, data-centric marketing and research team
          specializing in market research across the US and APAC. We deliver
          high-quality, reliable insights that empower decisive action. Powered
          by advanced technology and a strong respondent base, we help businesses
          uncover opportunities, navigate dynamic markets, and make informed
          decisions.
        </p>

        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
          onClick={() => window.open(EMAIL_URL, "_blank")}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
