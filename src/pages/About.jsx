import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-32 container mx-auto px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-8 text-center">
        About Sastikeyan Construction
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        Founded by <strong>GP Karthik</strong>, Sastikeyan Construction brings
        over 15 years of industry experience. Under his leadership, we have
        become a symbol of trust, quality, and premium design, turning countless
        visions into beautiful realities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/about-mission.jpeg"
            alt="Construction teamwork"
            className="rounded-2xl shadow-xl w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-headings font-bold text-primary mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to deliver structural superiority and innovative
            design. We believe that a home is more than just a place to
            live—it's a sanctuary.
          </p>
          <ul className="space-y-4">
            {[
              "Quality Workmanship",
              "On-Time Completion",
              "Transparent Pricing",
              "Eco-Friendly Materials",
            ].map((val) => (
              <li key={val} className="flex items-center gap-3">
                <span className="text-secondary text-xl">✓</span>
                <span className="font-medium text-gray-800">{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-inner border border-gray-100">
        <div className="w-full md:w-1/3">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto max-w-xs relative bg-white">
            <img
              src="/owner.jpeg"
              alt="GP Karthik"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-headings font-bold text-gray-800 mb-2">
            GP Karthik
          </h3>
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">
            Founder & Owner
          </p>
          <p className="text-gray-600 leading-relaxed italic mb-6">
            "At Sastikeyan Construction, we don't just build structures; we
            forge long-lasting relationships built on transparency and
            unparalleled craftsmanship. I personally oversee our projects to
            ensure that every nail, beam, and finish meets our rigorous standard
            of excellence."
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="tel:+919629141957"
              className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all"
            >
              Contact Me Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
