'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import "./SubHeroSection.css"

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com"

const subheroData = [
  {
    img: "/assets/subhero1.png",
    title: "Invest in your relationship with data",
    desc: "Offering data collection services across wide range of sectors ranging from niche businesses to focused consumers to help you gather only the best for your business.",
    button: "Learn More",
    reverse: false,
  },
  {
    img: "/assets/subhero2.png",
    title: "Improve your relationship with data",
    desc: "Accumulating and dissecting data, teased through technology, to uncover meaning in behaviors.",
    button: "Learn More",
    reverse: true,
  },
  {
    img: "/assets/subhero3.png",
    title: "Help data propel you into the future.",
    desc: "Deciphering data into drivers, augmenting deep human understanding to drive brands into real-world action.",
    button: "Learn More",
    reverse: false,
  },
]

export default function SubHeroSection() {
  return (
    <section className="subhero-section">
      <div className="subhero-container">
        {subheroData.map((item, index) => (
          <div
            key={index}
            className={`subhero-block ${item.reverse ? "reverse" : ""}`}
          >
            {/* Image */}
            <div className="subhero-image">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={400}
                className="image"
              />
            </div>

            {/* Text Content */}
            <div className="subhero-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <Button
                className="subhero-button"
                onClick={() => window.open(EMAIL_URL, "_blank")}
              >
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
