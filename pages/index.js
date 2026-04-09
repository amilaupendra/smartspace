import Head from "next/head";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Leaf,
  ThumbsUp,
  Briefcase,
  UtensilsCrossed,
  Cross,
  BookOpen,
  CalendarCheck2,
  ClipboardList,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import FadeInSection from "../components/FadeInSection";

/* ── Trust badge data ─────────────────────────────────────────────────── */
const trustBadges = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
    label: "Fully Insured",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    label: "Police Checked Staff",
  },
  {
    icon: <Leaf className="w-6 h-6 text-blue-600" />,
    label: "Eco-Friendly Products",
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-blue-600" />,
    label: "Satisfaction Guaranteed",
  },
];

/* ── Service highlights data ──────────────────────────────────────────── */
const serviceHighlights = [
  {
    title: "Office & Workspace",
    description:
      "We keep your work environment spotless and productive. Daily, weekly, or custom schedules available.",
    icon: <Briefcase className="w-5 h-5" />,
    slug: "/services/office-cleaning",
  },
  {
    title: "Restaurant & Kitchens",
    description:
      "Commercial-grade kitchen cleaning that meets all health and safety standards. Grease-free, hygiene-first.",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    slug: "/services/kitchen-cleaning",
  },
  {
    title: "Medical & Dental Clinics",
    description:
      "Rigorous infection-control cleaning protocols trusted by Perth healthcare professionals.",
    icon: <Cross className="w-5 h-5" />,
    slug: "/services/medical-cleaning",
  },
  {
    title: "Schools & Classrooms",
    description:
      "Safe, non-toxic cleaning for educational environments. Reliable morning-ready results every day.",
    icon: <BookOpen className="w-5 h-5" />,
    slug: "/services/school-cleaning",
  },
];

/* ── Marquee client names ─────────────────────────────────────────────── */
const clients = [
  "Luxe Waterfront",
  "Council Bunbury",
  "CleanOffice Co",
  "EduGroup",
  "HealthFirst",
  "WorkSpace+",
  "CityClinic",
  "BrightDesk",
  "MedSafe WA",
  "LearnSpace",
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          SmartSpace | Commercial Cleaning Perth &amp; Western Australia
        </title>
        <meta
          name="description"
          content="Professional commercial cleaning services in Perth and Western Australia. Office, kitchen, medical, and school cleaning. Get a free quote today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="SmartSpace | Commercial Cleaning Perth & WA"
        />
        <meta
          property="og:description"
          content="Professional commercial cleaning services in Perth and Western Australia."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. Trust Badges Bar ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-blue-50 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-2xl px-4 py-4 shadow-sm"
                >
                  {badge.icon}
                  <span className="text-sm font-semibold text-gray-800 text-center sm:text-left">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 3. Service Highlights ────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                What We Clean
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Specialised commercial cleaning for every type of business
                across Perth and WA.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceHighlights.map((s) => (
                <ServiceCard
                  key={s.title}
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                  showImage={false}
                  slug={s.slug}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 4. How It Works ─────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                How It Works
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Getting started with SmartSpace is simple. We handle everything
                so you can focus on running your business.
              </p>
            </div>

            {/* Steps grid — horizontal on desktop, vertical on mobile */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Connecting line visible on large screens only */}
              <div
                className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-blue-200"
                aria-hidden="true"
              />

              {[
                {
                  step: 1,
                  icon: <CalendarCheck2 className="w-7 h-7 text-blue-600" />,
                  title: "Book Your Service",
                  desc: "Contact us online or by phone to schedule a free assessment at your premises.",
                },
                {
                  step: 2,
                  icon: <ClipboardList className="w-7 h-7 text-blue-600" />,
                  title: "Share Your Details",
                  desc: "Tell us your site size, cleaning requirements, and preferred schedule.",
                },
                {
                  step: 3,
                  icon: <CheckCircle2 className="w-7 h-7 text-blue-600" />,
                  title: "Confirm Your Plan",
                  desc: "We'll send a tailored quote. Once approved, your cleaning plan is locked in.",
                },
                {
                  step: 4,
                  icon: <Sparkles className="w-7 h-7 text-blue-600" />,
                  title: "Enjoy a Spotless Space",
                  desc: "Sit back while our vetted team delivers consistently exceptional results.",
                },
              ].map(({ step, icon, title, desc }) => (
                <div
                  key={step}
                  className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-8 gap-4"
                >
                  {/* Step number badge */}
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shadow">
                    {step}
                  </span>

                  {/* Icon circle */}
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mt-2">
                    {icon}
                  </div>

                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 5. Client Logos Marquee ──────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Trusted by businesses across Perth
            </p>
          </div>

          {/* Marquee track — items duplicated for seamless loop */}
          <div className="overflow-hidden">
            <div className="animate-marquee">
              {[...clients, ...clients].map((name, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 mx-4 px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 5. CTA Banner ────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready for a Cleaner Workspace?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Book a free, no-obligation quote today. Our friendly team will
              tailor a cleaning plan that fits your schedule and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:brightness-95 active:scale-95 transition-all duration-200 text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
