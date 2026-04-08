import Head from 'next/head';
import Link from 'next/link';
import TestimonialCard from '../components/TestimonialCard';
import FadeInSection from '../components/FadeInSection';

/* ── Testimonial data ─────────────────────────────────────────────────── */
const testimonials = [
  {
    name: 'James R.',
    company: 'Perth CBD Office Manager',
    rating: 5,
    review:
      'SmartSpace transformed our office. The team is punctual, thorough, and always professional. Highly recommend for any business.',
  },
  {
    name: 'Linda T.',
    company: 'Subiaco Restaurant Owner',
    rating: 5,
    review:
      'Our kitchen has never been cleaner. They understand hygiene standards and always go above and beyond. Exceptional service every visit.',
  },
  {
    name: 'Dr. Sarah M.',
    company: 'Fremantle Dental Clinic',
    rating: 5,
    review:
      'Exceptional attention to detail in our clinic. We trust SmartSpace completely with our sterilisation-sensitive environment.',
  },
  {
    name: 'Mark W.',
    company: 'Joondalup School Principal',
    rating: 5,
    review:
      'Reliable and consistent. Our classrooms are spotless every morning without fail. The students and staff really notice the difference.',
  },
  {
    name: 'Angela P.',
    company: 'Midland Co-working Space',
    rating: 5,
    review:
      'Affordable, professional, and flexible with our schedule. A great local Perth business that genuinely cares about their clients.',
  },
  {
    name: 'Tom B.',
    company: 'West Perth Law Firm',
    rating: 5,
    review:
      "We switched to SmartSpace 6 months ago and haven't looked back. Impeccable results every time — our clients always comment on how clean the office looks.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Client Testimonials | SmartSpace Commercial Cleaning Perth</title>
        <meta
          name="description"
          content="See what Perth businesses say about SmartSpace Commercial Cleaning. Trusted by offices, clinics, restaurants and schools across Western Australia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/testimonials" />
        <meta
          property="og:title"
          content="Client Testimonials | SmartSpace Commercial Cleaning Perth"
        />
        <meta
          property="og:description"
          content="See what Perth businesses say about SmartSpace Commercial Cleaning."
        />
      </Head>

      {/* ── Page Hero Banner ─────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            What Our Clients Say
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Don&rsquo;t just take our word for it — hear from the Perth businesses
            that trust SmartSpace every day.
          </p>
        </section>
      </FadeInSection>

      {/* ── Overall rating bar ───────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-blue-50 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div>
              <p className="text-5xl font-extrabold text-blue-700">5.0</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.623 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">Average rating</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div>
              <p className="text-5xl font-extrabold text-blue-700">500+</p>
              <p className="text-sm text-gray-500 mt-1">Happy clients across Perth &amp; WA</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div>
              <p className="text-5xl font-extrabold text-blue-700">8+</p>
              <p className="text-sm text-gray-500 mt-1">Years of excellence</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Testimonials Grid ────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  company={t.company}
                  review={t.review}
                  rating={t.rating}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Join 500+ Happy Perth Businesses
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Experience the SmartSpace difference for yourself. Get a free, no-obligation quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:brightness-95 active:scale-95 transition-all duration-200 text-base"
          >
            Get a Free Quote
          </Link>
        </section>
      </FadeInSection>
    </>
  );
}
