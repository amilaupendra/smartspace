import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone } from 'lucide-react';

/**
 * _app.js — Global layout wrapper.
 * Renders Navbar + page content + Footer on every page.
 * Also renders the mobile-only floating Call Now button.
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Sticky top navbar */}
      <Navbar />

      {/* Page content — pt-16 offsets the fixed navbar height */}
      <main className="pt-16">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />

      {/* ── Mobile floating CTA button (hidden on md+) ── */}
      <a
        href="tel:0452620693"
        aria-label="Call SmartSpace now"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 md:hidden"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </>
  );
}
