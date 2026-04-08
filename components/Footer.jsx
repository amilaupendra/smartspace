import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* Logo — brightness-0 invert renders the image in white on dark bg */}
            <Link href="/" className="inline-flex mb-4 select-none" aria-label="SmartSpace Home">
              <Image
                src="/logo.png"
                alt="SmartSpace Commercial Cleaning"
                width={160}
                height={54}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional commercial cleaning services across Perth and Western
              Australia. Trusted by offices, clinics, restaurants and schools.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services column ── */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Office & Workspace Cleaning',
                'Restaurant & Kitchen Cleaning',
                'Medical & Dental Cleaning',
                'School & Classroom Cleaning',
                'Regular Scheduled Cleaning',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0452620693"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0452 620 693
                </a>
              </li>
              <li>
                <a
                  href="mailto:akeyzer2@icloud.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  akeyzer2@icloud.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Perth, Western Australia
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} SmartSpace Commercial Cleaning. All rights reserved.
          </p>
          <p>
            Serving Perth CBD, Subiaco, Fremantle, Joondalup, Midland &amp; surrounds
          </p>
        </div>
      </div>
    </footer>
  );
}
