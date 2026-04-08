import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Check } from 'lucide-react';
import FadeInSection from './FadeInSection';

/**
 * ServiceDetailLayout
 *
 * Reusable full-page layout for every service detail page.
 *
 * Props:
 *  title           {string}    h1 — service name
 *  tagline         {string}    Hero subheading
 *  heroImage       {string}    Unsplash URL used as CSS background-image
 *  secondaryImage  {string}    Unsplash URL used with Next.js <Image />
 *  summary         {string[]}  Array of 2–3 paragraph strings
 *  frequencyData   {{ area, frequency, reason }[]}
 *  maintenanceTips {string[]}
 *  checklist       {string[]}
 */
export default function ServiceDetailLayout({
  title,
  tagline,
  heroImage,
  secondaryImage,
  summary,
  frequencyData,
  maintenanceTips,
  checklist,
}) {
  return (
    <>
      {/* ── 1. Hero Banner ───────────────────────────────────────────────── */}
      <FadeInSection>
        <section
          className="relative flex items-center justify-center min-h-[60vh] bg-center bg-cover"
          style={{ backgroundImage: `url("${heroImage}")` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white py-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              {tagline}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* ── 2. Summary Section ───────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Service
                </h2>
                {summary.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {/* Right — image */}
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={secondaryImage}
                  alt={`${title} — SmartSpace Commercial Cleaning`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 3. Cleaning Frequency Section ────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              How Often Should You Clean?
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Industry-recommended cleaning frequencies for this type of environment.
            </p>

            {/* Desktop table (hidden on mobile) */}
            <div className="hidden sm:block rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Area / Task</th>
                    <th className="text-left px-6 py-4 font-semibold">Recommended Frequency</th>
                    <th className="text-left px-6 py-4 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {frequencyData.map((row, i) => (
                    <tr
                      key={row.area}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                    >
                      <td className="px-6 py-3.5 font-medium text-gray-800">{row.area}</td>
                      <td className="px-6 py-3.5 text-blue-700 font-semibold">{row.frequency}</td>
                      <td className="px-6 py-3.5 text-gray-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card stack (hidden on sm+) */}
            <div className="flex flex-col gap-3 sm:hidden">
              {frequencyData.map((row) => (
                <div
                  key={row.area}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
                >
                  <p className="font-bold text-gray-900 mb-1">{row.area}</p>
                  <p className="text-blue-700 font-semibold text-sm mb-1">{row.frequency}</p>
                  <p className="text-gray-500 text-sm">{row.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 4. Maintenance Tips Section ──────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Tips to Maintain Your Space Between Cleans
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Small daily habits go a long way in keeping your premises clean between
              professional visits.
            </p>
            <ul className="flex flex-col gap-4">
              {maintenanceTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeInSection>

      {/* ── 5. What's Included Checklist ─────────────────────────────────── */}
      <FadeInSection>
        <section className="py-20 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              What&rsquo;s Included
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Every SmartSpace visit for this service covers the following tasks as standard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm"
                >
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── 6. Bottom CTA ────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Book?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get a free, no-obligation quote for {title.toLowerCase()} tailored to your
            premises and schedule.
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
