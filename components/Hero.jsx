import Link from 'next/link';

/**
 * Hero
 * Full-viewport hero section with an Unsplash background image,
 * a dark overlay for text contrast, headline, subtext, and two CTA buttons.
 *
 * Uses CSS background-image (not Next.js <Image />) to avoid per-page
 * domain config complexity for the hero specifically.
 */
export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&auto=format&fit=crop")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <span className="inline-block mb-5 px-4 py-1.5 bg-blue-600/80 text-sm font-medium rounded-full tracking-wide backdrop-blur-sm">
          Trusted Commercial Cleaning — Perth &amp; WA
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 drop-shadow-lg">
          Professional Commercial Cleaning in{' '}
          <span className="text-blue-400">Western Australia</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Serving Perth CBD, Subiaco, Fremantle, Joondalup, Midland and
          surrounding suburbs with reliable, eco-friendly cleaning solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 text-base"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 bg-white/15 border border-white/40 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/25 active:scale-95 transition-all duration-200 text-base"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/60 text-xs animate-bounce">
        <span>Scroll down</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
