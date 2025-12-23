import "@/styles/testimonials.css";

const testimonials = [
  {
    name: "Daniel Clifford",
    company: "Carwale",
    highlight: "Exceptional insights that drive real decisions",
    message:
      "Ascent Standard helped us navigate a complex market with clarity. Their data-driven approach and research depth gave us the confidence to move forward decisively.",
    variant: "purple",
  },
  {
    name: "Jonathan Walters",
    company: "Growth Labs",
    highlight: "Highly professional and reliable team",
    message:
      "The team was supportive, responsive, and extremely knowledgeable. Their research quality exceeded expectations.",
    variant: "grey",
  },
  {
    name: "Jeanette Harmon",
    company: "MarketEdge",
    highlight: "A truly rewarding experience",
    message:
      "Working with Ascent Standard was seamless. Their insights were sharp, actionable, and delivered on time.",
    variant: "white-small",
  },
  {
    name: "Patrick Abrams",
    company: "InsightWorks",
    highlight: "Outstanding research standards",
    message:
      "Their commitment to quality and attention to detail really stood out. We now make faster, better-informed decisions.",
    variant: "grey-long",
  },
  {
    name: "Kira Whittle",
    company: "StrategyCore",
    highlight: "A game-changing partnership",
    message:
      "Ascent Standard transformed how we approach market research. The depth of insights and clarity of data were unmatched.",
    variant: "white-tall",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">

         <div className="testimonials-heading">
        <h2>Why Clients Trust Us</h2>
        <p>
          Trusted by businesses for reliable insights, quality research,
          and data-driven decision making.
        </p>
      </div>
      
      <div className="testimonials-wrapper">
        {testimonials.map((item, index) => (
          <div key={index} className={`testimonial-card ${item.variant}`}>
            <div className="testimonial-top">
              <div>
                <h3>{item.name}</h3>
                <p>{item.company}</p>
              </div>
            </div>

            <div className="testimonial-middle">
              <p>{item.highlight}</p>
            </div>

            <div className="testimonial-bottom">
              “{item.message}”
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
