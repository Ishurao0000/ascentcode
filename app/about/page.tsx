import Link from "next/link";

export default function AboutPage() {
  const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com";
  return (
    <section className="bg-white">

      {/* Banner */}
<div className="w-full">

  {/* Desktop Banner */}
  <img
    src="/assets/webabout.jpg"
    alt="About banner desktop"
    className="hidden md:block w-full h-auto object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="/assets/mobileabout.jpg"
    alt="About banner mobile"
    className="block md:hidden w-full h-auto object-contain"
  />

</div>


      {/* Content */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Intro */}
          <div className="text-center mb-20">
            <h1 className="text-1xl font-bold text-gray-900 mb-6">
             We help brands to connect with their stakeholders across markets to acquire in-depth insights. We provide a holistic market research experience to our clients and solve all business challenges through data with technology. Our presence in more than 30 countries makes us believe we can cater to all your research needs in any corner of the globe. In addition to that through our extensive partner network we make sure we are able to satisfy your requirement even in markets where we do not have a panel member. Ascent is quality driven because of which our panelists and partner network go through rigorous checks. Not only we implement strict checks during vetting or recruiting but also during sampling we have meticulous and stringent securities to have the finest data quality.
            </h1>
          
          </div>


          {/* The A-Team Section */}
<section className=" bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Left: GIF */}
      <div className="w-full">
        <img
          src="/assets/ateam.gif"
          alt="The A-Team"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Right: Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          The A-Team
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Wearing multiple hats, we have an experienced in-house team of project
          management professionals that never fails to deliver exceptional
          customer service. Our 24x7 coverage, strict adherence to deadlines, and
          deep understanding of audience and research needs set us apart.
          <br /><br />
          At Ascent, we also provide customized and tailor-made sampling plans
          designed specifically around our clients’ objectives.
        </p>
      </div>

    </div>
  </div>
</section>





        </div>
      </div>
{/* Diversity Banner Section */}
<section className="relative w-full">

  {/* Desktop Image */}
  <img
    src="/assets/aboutsubbanner.png"
    alt="Diversity and Inclusion"
    className="hidden md:block w-full h-auto object-contain"
  />

  {/* Mobile Image */}
  <img
    src="/assets/mobilesubbanner.png"
    alt="Diversity and Inclusion Mobile"
    className="block md:hidden w-full object-contain"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-6">

      <h2 className="
        text-5xl sm:text-3xl md:text-4xl
        font-bold text-black mb-4
      ">
        Diverse in thought. Inclusive in action.
      </h2>

      <p className="
        text-base sm:text-lg md:text-xl
        text-black 
      ">
        At Ascent, we understand human sentiments.
      </p>

    </div>
  </div>

</section>

{/* Our Life Cycle Section */}
<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Life Cycle
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        A structured, insight-driven approach that transforms research into
        confident business decisions.
      </p>
    </div>

    {/* Lifecycle Steps */}
    <div className="grid md:grid-cols-4 gap-10 relative">

      {/* Connector Line (Desktop only) */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gray-300" />

      {/* Step 1 */}
      <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <span className="text-6xl font-bold text-indigo-100 absolute -top-10 right-6">
          01
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Plan
        </h3>
        <p className="text-gray-600 leading-relaxed">
          When we receive a project proposal, we examine every requirement in
          detail — understanding the product or service, defining objectives,
          determining sample size, and selecting the right data collection
          methods.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <span className="text-6xl font-bold text-indigo-100 absolute -top-10 right-6">
          02
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Analyze
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our researchers analyze quantitative and qualitative data by selecting
          relevant metrics, creating structured tables, and identifying patterns
          related to consumer segments, purchase behavior, competition, and
          market conditions.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <span className="text-6xl font-bold text-indigo-100 absolute -top-10 right-6">
          03
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Develop
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We help organizations build goal-oriented strategies that strengthen
          their competitive advantage, deepen audience connections, and expand
          market reach by turning insights into actionable plans.
        </p>
      </div>

      {/* Step 4 */}
      <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <span className="text-6xl font-bold text-indigo-100 absolute -top-10 right-6">
          04
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Deploy
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Market research becomes a strategic tool for adapting to changing
          consumer behavior and competitive landscapes, improving decision
          making, reducing risk, and ensuring long-term business sustainability.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-24" style={{ backgroundColor: "#ede6d9" }}>
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
     Start a new relationship with data now.
    </h2>

    
          <a
            href={EMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-900 transition"
          >
            Contact Us
          </a>

  </div>
</section>


    </section>
    
  );
}
