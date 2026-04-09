import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X, ChevronDown } from "lucide-react";

/* ── Nav link definitions ─────────────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Office Cleaning", href: "/services/office-cleaning" },
      { label: "Kitchen Cleaning", href: "/services/kitchen-cleaning" },
      { label: "Medical Cleaning", href: "/services/medical-cleaning" },
      { label: "School Cleaning", href: "/services/school-cleaning" },
      { label: "Scheduled Cleaning", href: "/services/scheduled-cleaning" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Desktop: which dropdown is hovered (by label)
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  // Timeout ref so we can cancel the close delay
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [router.pathname]);

  const isActive = (href) =>
    href === "/"
      ? router.pathname === "/"
      : router.pathname === href || router.pathname.startsWith(href + "/");

  /* ── Hover helpers (desktop dropdown) ────────────────────────────────── */
  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredDropdown(label);
  };
  const handleMouseLeave = () => {
    // Small delay so the mouse can travel from trigger → panel without closing
    closeTimer.current = setTimeout(() => setHoveredDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          {/* h-16 matches the navbar row height; py-2 gives equal top/bottom padding */}
          <Link
            href="/"
            className="flex items-center select-none h-16 py-2"
            aria-label="SmartSpace Home"
          >
            <Image
              src="/logo.png"
              alt="SmartSpace Commercial Cleaning"
              width={220}
              height={64}
              className="object-contain h-full w-auto"
              priority
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* ── Services with hover dropdown ── */
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger — clicking also navigates to /services */}
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown panel — fade + slide with CSS transitions */}
                  <div
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                    className={`absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50
                      transition-all duration-200 origin-top
                      ${
                        hoveredDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-150
                          hover:bg-blue-50 hover:text-blue-700
                          ${
                            isActive(item.href) && item.href !== "/services"
                              ? "text-blue-700 font-semibold"
                              : "text-gray-700"
                          }
                          ${i === 0 ? "font-semibold border-b border-gray-100 mb-1" : ""}
                        `}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                href="/contact"
                className="ml-3 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* ── Services toggle in mobile menu ── */
                <li key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Indented sub-items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 mt-1 flex flex-col gap-0.5 pb-1">
                      {link.dropdown.map((item, i) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded-md text-sm transition-colors duration-150
                              hover:text-blue-700 hover:bg-blue-50
                              ${
                                isActive(item.href) && item.href !== "/services"
                                  ? "text-blue-700 font-semibold"
                                  : "text-gray-600"
                              }
                              ${i === 0 ? "font-semibold" : ""}
                            `}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
