import Head from 'next/head';
import Image from 'next/image';
import { ShieldCheck, Star, Heart } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

/* ── Mission & Values data ────────────────────────────────────────────── */
const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Reliability',
    description:
      'We show up on time, every time. Our clients count on us to deliver consistent, high-quality results without excuses.',
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: 'Quality',
    description:
      'From hospital-grade disinfectants to eco-friendly solutions, we use the best products and techniques for every job.',
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: 'Trust',
    description:
      'All our staff are police-checked and fully trained. We treat your premises with the same care we would our own.',
  },
];

/* ── Team data ────────────────────────────────────────────────────────── */
const team = [
  {
    name: 'Michael Carter',
    role: 'Founder & Operations Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
    imageAlt: 'Michael Carter — Founder & Operations Manager',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Client Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop',
    imageAlt: 'Sarah Johnson — Head of Client Relations',
  },
  {
    name: 'David Nguyen',
    role: 'Senior Cleaning Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&auto=format&fit=crop',
    imageAlt: 'David Nguyen — Senior Cleaning Specialist',
  },
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
        <meta property="og:title" content="About SmartSpace | Commercial Cleaning Perth WA" />
        <meta
          property="og:description"
          content="Learn about SmartSpace Commercial Cleaning — our mission, values, and dedicated team."
        />
      </Head>

      {/* ── 1. Page Hero Banner ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About SmartSpace</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Perth&rsquo;s trusted commercial cleaning partner — built on reliability,
            quality, and genuine care for every client.
          </p>
        </section>
      </FadeInSection>

      {/* ── 2. Company Introduction ─────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SmartSpace Commercial Cleaning was founded with a single purpose: to give
                  Perth businesses a cleaning service they can truly rely on. We understand
                  that a clean workspace isn&rsquo;t just about appearances — it impacts
                  employee health, client impressions, and regulatory compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With years of experience serving offices, medical clinics, restaurants,
                  and schools across Perth and Western Australia, we&rsquo;ve built a
                  reputation for thoroughness, punctuality, and transparent communication.
                  Every member of our team is police-checked, fully insured, and trained
                  to the highest industry standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We use eco-friendly, hospital-grade cleaning products that are safe for
                  your staff and the environment. Whether you need a one-off deep clean or
                  a fully managed ongoing schedule, SmartSpace has the expertise to deliver.
                </p>
              </div>

              {/* Stats block */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '500+', label: 'Clients Served' },
                  { value: '8+', label: 'Years Experience' },
                  { value: '98%', label: 'Satisfaction Rate' },
                  { value: '50+', label: 'Trained Staff' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm"
                  >
                    <p className="text-3xl font-extrabold text-blue-700 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 3. Mission & Values ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
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
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 4. Team Section ──────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Meet the Team
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The dedicated professionals behind SmartSpace&rsquo;s spotless results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Portrait image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.imageUrl}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
