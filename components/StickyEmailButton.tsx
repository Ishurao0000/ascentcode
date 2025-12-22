'use client'

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com";

export default function StickyEmailButton() {
  return (
    <>
      {/* ===== Desktop Sticky Button ===== */}
      <a
        href={EMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden md:flex
          fixed
          right-0
          top-1/2
          -translate-y-1/2
          z-50
          bg-red-600
          hover:bg-red-700
          text-white
          font-semibold
          px-4
          py-3
          rounded-l-xl
          shadow-lg
          transition-all
          duration-300
        "
      >
        ✉ Contact
      </a>

      {/* ===== Mobile Floating Button ===== */}
      <a
        href={EMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          md:hidden
          fixed
          bottom-6
          right-6
          z-50
          bg-red-600
          hover:bg-red-700
          text-white
          font-semibold
          px-5
          py-3
          rounded-full
          shadow-lg
          transition-all
          duration-300
        "
      >
        ✉ Contact
      </a>
    </>
  )
}
