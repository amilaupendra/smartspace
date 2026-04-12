import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand column ── */}
          <div className="flex flex-col items-center lg:col-span-1 sm:items-start">
            {/* Logo — centered on mobile, left-aligned on sm+ */}
            <Link
              href="/"
              className="inline-flex mb-4 select-none"
              aria-label="SmartSpace Home"
            >
              <Image
                src="/logo.png"
                alt="SmartSpace Commercial Cleaning"
                width={160}
                height={54}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-center text-gray-400 sm:text-left">
              Professional commercial cleaning services across Perth and Western
              Australia. Trusted by offices, clinics, restaurants and schools.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition-colors duration-200 hover:text-pink-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-gray-400 transition-colors duration-200 hover:text-sky-400"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services column ── */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "Office & Workspace Cleaning",
                "Restaurant & Kitchen Cleaning",
                "Medical & Dental Cleaning",
                "School & Classroom Cleaning",
                "Regular Scheduled Cleaning",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0452620693"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
                >
                  <Phone className="flex-shrink-0 w-4 h-4" />
                  0452 620 693
                </a>
              </li>
              <li>
                <a
                  href="mailto:akeyzer2@icloud.com"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
                >
                  <Mail className="flex-shrink-0 w-4 h-4" />
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
        <div className="flex flex-col items-center justify-between gap-3 pt-6 mt-12 text-xs text-gray-500 border-t border-gray-800 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SmartSpace Commercial Cleaning. All
            rights reserved.
          </p>
          <p>
            Serving Perth CBD, Subiaco, Fremantle, Joondalup, Midland &amp;
            surrounds
          </p>
        </div>
      </div>
    </footer>
  );
}
