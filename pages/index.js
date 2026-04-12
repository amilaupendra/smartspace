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

/* ── Partner logos for marquee ───────────────────────────────────────── */
const partnerLogos = [
  {
    id: 'brightoffice',
    name: 'BrightOffice',
    color: '#2563eb',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12H4V4zm3 2h2v2H7V6zm4 0h2v2h-2V6zm-4 4h2v2H7v-2zm4 0h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    id: 'medicarewa',
    name: 'MediCare WA',
    color: '#16a34a',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M8 2a1 1 0 000 2h4a1 1 0 000-2H8zm-2 4a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm5 3a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'edufirst',
    name: 'EduFirst Group',
    color: '#7c3aed',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
  },
  {
    id: 'healthcore',
    name: 'HealthCore',
    color: '#0891b2',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'lexgroup',
    name: 'Lex Group',
    color: '#1e3a8a',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'retailpro',
    name: 'RetailPro',
    color: '#ea580c',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
      </svg>
    ),
  },
  {
    id: 'buildwise',
    name: 'BuildWise',
    color: '#b45309',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
        <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
        <path d="M9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
      </svg>
    ),
  },
  {
    id: 'aquaflow',
    name: 'AquaFlow Co',
    color: '#0e7490',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5z" clipRule="evenodd" />
      </svg>
    ),
  },
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
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex-shrink-0 mx-4 flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-100 rounded-xl shadow-sm whitespace-nowrap"
                >
                  {/* Coloured icon badge */}
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg text-white flex-shrink-0"
                    style={{ backgroundColor: logo.color }}
                  >
                    {logo.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">
                    {logo.name}
                  </span>
                </div>
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
