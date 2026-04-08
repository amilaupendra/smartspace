import Head from 'next/head';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const props = {
  title: 'Medical & Dental Clinic Cleaning',
  tagline: 'Clinical-grade cleaning for patient-safe environments',
  heroImage:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&auto=format&fit=crop',
  secondaryImage:
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format&fit=crop',
  summary: [
    'Medical and dental environments demand a far higher standard of cleanliness than standard commercial spaces. SmartSpace uses TGA-listed, hospital-grade disinfectants and follows infection control protocols aligned with AHPRA and WA Health guidelines.',
    'Our staff receive specialist training in biohazard handling, clinical waste disposal, and patient-area sanitisation to ensure your practice meets all regulatory and accreditation requirements.',
    'We understand that patient trust begins the moment they walk through your door. A spotless, odour-free clinic communicates professionalism and care.',
  ],
  frequencyData: [
    { area: 'Patient contact surfaces',  frequency: 'After each patient',  reason: 'Infection prevention' },
    { area: 'Waiting room',              frequency: 'Daily',               reason: 'Patient and visitor safety' },
    { area: 'Treatment rooms',           frequency: 'Daily',               reason: 'Cross-infection control' },
    { area: 'Bathrooms',                 frequency: 'Twice daily',         reason: 'High-touch, high-risk surfaces' },
    { area: 'Reception and front desk',  frequency: 'Daily',               reason: 'First contact, high-touch zone' },
    { area: 'Clinical waste disposal',   frequency: 'Daily',               reason: 'Regulatory compliance' },
    { area: 'Full deep disinfection',    frequency: 'Weekly',              reason: 'Reduces biofilm and airborne pathogens' },
  ],
  maintenanceTips: [
    'Ensure all staff follow hand hygiene protocols between every patient',
    'Keep disinfectant wipes accessible at every clinical workstation',
    'Dispose of clinical waste in compliant bins immediately after procedures',
    'Use HEPA-filtered vacuums to minimise airborne particle spread',
    'Restrict cleaning products to TGA-listed hospital-grade disinfectants only',
    'Maintain a signed cleaning log for accreditation audits and inspections',
    'Ensure ventilation and HVAC systems are serviced on a regular schedule',
  ],
  checklist: [
    'Disinfecting all patient contact surfaces',
    'Sanitising treatment chairs and beds',
    'Mopping floors with hospital-grade disinfectant',
    'Cleaning and disinfecting all bathrooms',
    'Wiping waiting room chairs and surfaces',
    'Sanitising reception desk and payment terminals',
    'Emptying and disinfecting clinical waste bins',
    'Cleaning internal glass and partition screens',
    'Restocking gloves, masks, and hand sanitiser',
    'Spot cleaning walls and skirting boards',
    'Logging all completed tasks for compliance',
    'Checking sharps disposal units',
  ],
};

export default function MedicalCleaningPage() {
  return (
    <>
      <Head>
        <title>Medical & Dental Clinic Cleaning Perth | SmartSpace Cleaning WA</title>
        <meta
          name="description"
          content="Hospital-grade medical and dental clinic cleaning in Perth WA. SmartSpace follows AHPRA infection control protocols with TGA-listed disinfectants."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services/medical-cleaning" />
        <meta property="og:title" content="Medical & Dental Clinic Cleaning Perth | SmartSpace" />
        <meta
          property="og:description"
          content="Hospital-grade medical and dental clinic cleaning in Perth WA."
        />
      </Head>
      <ServiceDetailLayout {...props} />
    </>
  );
}
