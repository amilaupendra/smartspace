import Head from 'next/head';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const props = {
  title: 'Restaurant & Commercial Kitchen Cleaning',
  tagline: 'Hygiene you can trust — every service, every time',
  heroImage:
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop',
  secondaryImage:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
  summary: [
    'Commercial kitchens operate under strict food safety regulations, and maintaining hygiene compliance is non-negotiable. SmartSpace provides deep cleaning services aligned with HACCP principles, targeting grease traps, rangehoods, fryers, benches, and floors.',
    'Our team is trained in food-safe chemical handling and understands the demands of high-volume kitchen environments. We work around your trading hours to minimise disruption.',
    'From small café kitchens in Fremantle to large restaurant groups across Perth, we deliver consistent, audit-ready results every visit.',
  ],
  frequencyData: [
    { area: 'Cooking surfaces',      frequency: 'After every use',   reason: 'Prevents cross-contamination' },
    { area: 'Floor degreasing',      frequency: 'Daily',             reason: 'Slip hazard prevention' },
    { area: 'Rangehood & filters',   frequency: 'Weekly',            reason: 'Fire risk reduction and airflow' },
    { area: 'Grease trap',           frequency: 'Monthly',           reason: 'Legal compliance and odour control' },
    { area: 'Cool room & freezer',   frequency: 'Monthly',           reason: 'Food safety and mould prevention' },
    { area: 'Deep equipment clean',  frequency: 'Quarterly',         reason: 'Extends equipment life' },
    { area: 'Exhaust duct clean',    frequency: 'Every 6 months',    reason: 'Fire safety compliance' },
  ],
  maintenanceTips: [
    'Wipe down all cooking surfaces immediately after each use',
    'Clear floor drains of food debris at the end of every shift',
    'Label and rotate food stock correctly to reduce spillage incidents',
    'Check rangehood filters weekly and flag when saturation is visible',
    'Maintain a written cleaning log on-site for health department inspections',
    'Train all kitchen staff on basic hygiene practices between professional cleans',
    'Use colour-coded cloths to prevent cross-contamination between food zones',
  ],
  checklist: [
    'Degreasing all cooking equipment',
    'Deep cleaning rangehoods and filters',
    'Sanitising all food prep benches',
    'Scrubbing and degreasing floors',
    'Cleaning behind and under all equipment',
    'Grease trap inspection and clean',
    'Sanitising sinks and taps',
    'Cleaning cool room shelving and walls',
    'Removing grease buildup from walls and splashbacks',
    'Restocking hygiene supplies',
    'Wiping down all appliance exteriors',
    'Documenting clean for compliance records',
  ],
};

export default function KitchenCleaningPage() {
  return (
    <>
      <Head>
        <title>Commercial Kitchen Cleaning Perth | SmartSpace Cleaning WA</title>
        <meta
          name="description"
          content="HACCP-aligned commercial kitchen and restaurant cleaning in Perth WA. SmartSpace targets rangehoods, grease traps, fryers, and food prep surfaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services/kitchen-cleaning" />
        <meta property="og:title" content="Commercial Kitchen Cleaning Perth | SmartSpace" />
        <meta
          property="og:description"
          content="HACCP-aligned commercial kitchen and restaurant cleaning in Perth WA."
        />
      </Head>
      <ServiceDetailLayout {...props} />
    </>
  );
}
