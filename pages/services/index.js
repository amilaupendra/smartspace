import Head from 'next/head';
import Link from 'next/link';
import { Briefcase, UtensilsCrossed, Cross, BookOpen, CalendarCheck } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';
import FadeInSection from '../../components/FadeInSection';

/* ── Services data ────────────────────────────────────────────────────── */
const services = [
  {
    title: 'Office & Workspace Cleaning',
    description:
      'We deliver immaculate office environments that keep your team focused and clients impressed. Flexible scheduling — daily, weekly, or bespoke.',
    icon: <Briefcase className="w-5 h-5" />,
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop',
    imageAlt: 'Clean modern office workspace',
    slug: '/services/office-cleaning',
  },
  {
    title: 'Restaurant & Commercial Kitchen Cleaning',
    description:
      'Deep-clean degreasing and sanitation for commercial kitchens that meets all health authority standards. Safe, compliant, and spotless.',
    icon: <UtensilsCrossed className="w-5 h-5" />,
    imageUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop',
    imageAlt: 'Commercial kitchen being cleaned',
    slug: '/services/kitchen-cleaning',
  },
  {
    title: 'Medical & Dental Clinic Cleaning',
    description:
      'Infection-control cleaning protocols specifically designed for healthcare environments. TGA-approved disinfectants, EPA-registered products.',
    icon: <Cross className="w-5 h-5" />,
    imageUrl:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop',
    imageAlt: 'Clean medical clinic hallway',
    slug: '/services/medical-cleaning',
  },
  {
    title: 'School & Classroom Cleaning',
    description:
      'Child-safe, non-toxic cleaning for classrooms, halls, and bathrooms. Morning-ready results every school day without fail.',
    icon: <BookOpen className="w-5 h-5" />,
    imageUrl:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop',
    imageAlt: 'Clean bright school classroom',
    slug: '/services/school-cleaning',
  },
  {
    title: 'Regular Scheduled Cleaning',
    description:
      'Set-and-forget scheduled cleaning plans that keep your premises consistently clean. Customised frequency, time, and scope to suit your operations.',
    icon: <CalendarCheck className="w-5 h-5" />,
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop',
    imageAlt: 'Scheduled commercial cleaning service',
    slug: '/services/scheduled-cleaning',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Cleaning Services Perth | SmartSpace Commercial Cleaning WA</title>
        <meta
          name="description"
          content="Explore SmartSpace's full range of commercial cleaning services in Perth WA — office, kitchen, medical, school, and scheduled cleaning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services" />
        <meta
          property="og:title"
          content="Cleaning Services Perth | SmartSpace Commercial Cleaning WA"
        />
        <meta
          property="og:description"
          content="Explore SmartSpace's full range of commercial cleaning services in Perth WA."
        />
      </Head>

      {/* ── Page Hero Banner ─────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive commercial cleaning solutions for every type of Perth business.
            Professional, reliable, and tailored to your needs.
          </p>
        </section>
      </FadeInSection>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  imageUrl={service.imageUrl}
                  imageAlt={service.imageAlt}
                  showImage={true}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Why Choose Us strip ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Perth Businesses Choose SmartSpace
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
              We&rsquo;re not just another cleaning company — we&rsquo;re your long-term
              facilities partner.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { stat: 'Fully Insured',  sub: 'Public liability cover on every job' },
                { stat: 'Police Checked', sub: 'Every team member background-verified' },
                { stat: 'Eco-Friendly',   sub: 'Green-certified product range' },
                { stat: '24hr Response',  sub: 'We reply to every enquiry within a day' },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-blue-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="font-bold text-blue-700 text-base mb-1">{item.stat}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Get in touch and we&rsquo;ll assess your premises and recommend the best plan.
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
