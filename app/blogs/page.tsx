import Link from "next/link";

const blogs = [
  {
    slug: "predicting-the-future",
    title: "Predicting the Future",
    description:
      "Data science is a slippery term that encompasses everything from handling data to predicting behavior. Keep reading to get an overview of this 21st century buzz…",
    image: "/assets/blogs/blogs1.png",
  },
  {
    slug: "ml-ai-applications-in-market-research",
    title: "ML/AI applications in Market Research",
    description:
      "To what extent is ML and AI being utilized in Market Research today? Is it still early or already mature? Keep reading to dive deeper…",
    image: "/assets/blogs/blogs2.png",
  },
  {
    slug: "machine-learning-trends-2022",
    title: "Machine Learning trends to follow in 2022",
    description:
      "Artificial intelligence and Machine Learning are becoming critical in business decision-making and product innovation.",
    image: "/assets/blogs/blogs3.png",
  },
  {
    slug: "whats-changing-in-data-analysis-2022",
    title: "What’s changing in data analysis in 2022",
    description:
      "With increasing data, analytics will only gain momentum and stay at the core of modern technology solutions.",
    image: "/assets/blogs/blogs4.png",
  },
  {
    slug: "computer-vision-data-used-best",
    title: "Computer vision - Data used at best",
    description:
      "Computer vision is one of the most powerful AI tools you’ve likely used without even realizing it.",
    image: "/assets/blogs/blogs5.png",
  },
  {
    slug: "data-quality-noise",
    title: "#Data Quality : Noise in data",
    description:
      "The need for high-quality, trustworthy data will never go away. Compromised data quality hurts more than expected.",
    image: "/assets/blogs/blogs6.png",
  },
  {
    slug: "why-to-research-the-market",
    title: "Why to research the market",
    description:
      "Market research helps businesses understand their audience, improve products, and drive growth.",
    image: "/assets/blogs/blogs7.png",
  },
  {
    slug: "21st-century-gold",
    title: "21st Century Gold",
    description:
      "Data is valuable, but only when refined, analyzed, and transformed into actionable insight.",
    image: "/assets/blogs/blogs8.png",
  },
];

export default function BlogsPage() {
  return (
    <>
    <section className="relative w-full h-[55vh] sm:h-[60vh] md:h-[80vh] flex items-center">
  
  {/* Background Image */}
  <img
    src="/assets/blogs/blogsbanner.png"
    alt="Blogs Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Content */}
  <div className="relative z-10 w-full px-6">
    <div className="max-w-4xl mx-auto text-center">

      {/* Heading */}
      <h1 className="
        text-3xl 
        sm:text-4xl 
        md:text-5xl 
        font-bold 
        text-white 
        mb-4
        leading-tight
      ">
        Intelligence, applied creatively.
      </h1>

      {/* Sub Heading */}
      <p className="
        text-sm 
        sm:text-base 
        md:text-lg 
        text-gray-200 
        leading-relaxed 
        max-w-3xl 
        mx-auto
      ">
        Our solutions are wide and varied, but our approaches nimble and effective.
        Uncovering deep human insights, then helping brands act on them. We calibrate
        teams specifically to needs, then tap additive resources as necessary—by design
        or by discovery. This gives us scale in ability and speed in delivery, for any
        size challenge.
      </p>

    </div>
  </div>
</section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">


  


        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="px-4 pt-6 pb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  target="_blank"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
