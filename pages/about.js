import Head from "next/head";
import Image from "next/image";
import { ShieldCheck, Star, Heart } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

/* ── Mission & Values data ────────────────────────────────────────────── */
const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Reliability",
    description:
      "We show up on time, every time. Our clients count on us to deliver consistent, high-quality results without excuses.",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Quality",
    description:
      "From hospital-grade disinfectants to eco-friendly solutions, we use the best products and techniques for every job.",
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Trust",
    description:
      "All our staff are police-checked and fully trained. We treat your premises with the same care we would our own.",
  },
];

/* ── Founder data ─────────────────────────────────────────────────────── */
const founder = {
  name: "Anton Keyzer",
  role: "Founder & Operations Manager",
  imageUrl:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
  imageAlt:
    "Anton Keyzer — Founder & Operations Manager, SmartSpace Commercial Cleaning",
  bio: [
    "Anton founded SmartSpace with a single purpose: to give Perth businesses a cleaning service they can truly rely on. He understands that a clean workspace isn't just about appearances — it impacts employee health, client impressions, and regulatory compliance.",
    "With over a decade of hands-on experience in commercial facilities management, Anton built SmartSpace from the ground up — personally vetting every team member, selecting every product, and setting the quality standards the company still upholds today.",
    "Every member of the team is police-checked, fully insured, and trained to the highest industry standards. Anton's commitment to punctuality, transparency, and eco-conscious cleaning practices is at the heart of everything SmartSpace does.",
  ],
};

const stats = [
  { value: "30+", label: "Clients Served" },
  { value: "20+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Trained Staff" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About SmartSpace | Commercial Cleaning Perth WA</title>
        <meta
          name="description"
          content="Learn about SmartSpace Commercial Cleaning — our mission, values, and dedicated team serving Perth and Western Australia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/about" />
        <meta
          property="og:title"
          content="About SmartSpace | Commercial Cleaning Perth WA"
        />
        <meta
          property="og:description"
          content="Learn about SmartSpace Commercial Cleaning — our mission, values, and dedicated team."
        />
      </Head>

      {/* ── 1. Page Hero Banner ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About SmartSpace
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Perth&rsquo;s trusted commercial cleaning partner — built on
            reliability, quality, and genuine care for every client.
          </p>
        </section>
      </FadeInSection>

      {/* ── 2. Founder Section ───────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Meet the Founder
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The person behind SmartSpace&rsquo;s mission and standards.
              </p>
            </div>

            {/* Founder card — portrait left, bio right on md+ */}
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-10">
              {/* Portrait */}
              <div className="relative w-full md:w-72 h-72 md:h-auto flex-shrink-0">
                <Image
                  src={founder.imageUrl}
                  alt={founder.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center p-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-1">
                    {founder.role}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {founder.bio.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-gray-600 leading-relaxed text-sm"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-extrabold text-blue-700 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 4. Mission & Values ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Our Mission &amp; Values
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Everything we do is guided by three core principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-7 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
