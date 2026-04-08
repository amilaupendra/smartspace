import Head from 'next/head';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

/* ── Contact info cards ───────────────────────────────────────────────── */
const contactCards = [
  {
    icon: <Phone className="w-7 h-7 text-blue-600" />,
    label: 'Phone',
    value: '0452 620 693',
    href: 'tel:0452620693',
  },
  {
    icon: <Mail className="w-7 h-7 text-blue-600" />,
    label: 'Email',
    value: 'akeyzer2@icloud.com',
    href: 'mailto:akeyzer2@icloud.com',
  },
  {
    icon: <MapPin className="w-7 h-7 text-blue-600" />,
    label: 'Location',
    value: 'Perth, Western Australia',
    href: null,
  },
];

const services = [
  'Office & Workspace Cleaning',
  'Restaurant & Kitchen Cleaning',
  'Medical & Dental Clinic Cleaning',
  'School & Classroom Cleaning',
  'Regular Scheduled Cleaning',
  'Other',
];

const serviceAreas = [
  'Perth CBD',
  'Subiaco',
  'Fremantle',
  'Joondalup',
  'Midland',
  'Rockingham',
  'Mandurah',
  'Armadale',
];

export default function ContactPage() {
  // Controlled form state (static — no backend submission)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // No actual submission — just show a success message for demo purposes
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact SmartSpace | Get a Free Cleaning Quote Perth WA</title>
        <meta
          name="description"
          content="Contact SmartSpace Commercial Cleaning for a free quote. Serving Perth and all of Western Australia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/contact" />
        <meta
          property="og:title"
          content="Contact SmartSpace | Get a Free Cleaning Quote Perth WA"
        />
        <meta
          property="og:description"
          content="Contact SmartSpace Commercial Cleaning for a free quote."
        />
      </Head>

      {/* ── Page Hero Banner ─────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready for a cleaner workspace? Fill in the form below or call us directly.
            We&rsquo;ll get back to you within 24 hours.
          </p>
        </section>
      </FadeInSection>

      {/* ── Contact Info Cards ───────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{card.label}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{card.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send an Enquiry</h2>
              <p className="text-gray-500">
                We&rsquo;ll get back to you within{' '}
                <span className="text-blue-600 font-semibold">24 hours</span>.
              </p>
            </div>

            {submitted ? (
              /* Success state */
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
                <p className="text-gray-600 text-sm">
                  Thanks for reaching out. We&rsquo;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col gap-5"
                noValidate
              >
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0400 000 000"
                      className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white text-gray-700"
                  >
                    <option value="">— Select a service —</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your premises and what you need..."
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Notice */}
                <p className="text-xs text-gray-400">
                  We&rsquo;ll get back to you within 24 hours. Your details are kept private.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200 text-sm tracking-wide"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </FadeInSection>

      {/* ── Service Areas ────────────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-14 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Areas</h2>
            <p className="text-gray-600 mb-7">
              We proudly serve businesses across Perth and surrounding suburbs:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-white border border-blue-200 text-blue-700 font-medium text-sm rounded-full shadow-sm"
                >
                  {area}
                </span>
              ))}
              <span className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-full shadow-sm">
                + surrounding suburbs
              </span>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
