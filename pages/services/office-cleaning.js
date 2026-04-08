import Head from 'next/head';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const props = {
  title: 'Office & Workspace Cleaning',
  tagline: 'A productive team starts with a clean environment',
  heroImage:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop',
  secondaryImage:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
  summary: [
    'A clean office is more than just appearances — it directly impacts staff productivity, health, and morale. Our office cleaning service covers everything from daily desk wipe-downs to deep carpet cleans, ensuring your workspace always makes the right impression.',
    'SmartSpace operates after hours to avoid disrupting your team. We use eco-friendly, non-toxic products safe for all office environments, and our staff are fully police-checked and insured.',
    'Whether you manage a small co-working space or a large corporate floor in Perth CBD, we tailor our service to your layout, hours, and budget.',
  ],
  frequencyData: [
    { area: 'Desks & surfaces',      frequency: 'Daily',           reason: 'Reduces bacteria and allergens' },
    { area: 'Floors & vacuuming',    frequency: 'Daily',           reason: 'Prevents dust build-up' },
    { area: 'Bathrooms',             frequency: 'Daily',           reason: 'Hygiene and staff wellbeing' },
    { area: 'Kitchen / breakroom',   frequency: 'Daily',           reason: 'Food hygiene and pest prevention' },
    { area: 'Windows (inside)',       frequency: 'Fortnightly',     reason: 'Natural light and professional appearance' },
    { area: 'Deep clean',            frequency: 'Monthly',         reason: 'Removes embedded dirt and grime' },
    { area: 'Carpet steam clean',    frequency: 'Every 6 months',  reason: 'Extends carpet life' },
  ],
  maintenanceTips: [
    'Encourage a clear-desk policy at the end of each workday',
    'Place bins at every workstation to reduce mess spreading to common areas',
    'Keep desk sanitiser wipes available for staff to use on high-touch items',
    'Tidy communal areas like the kitchen after each use',
    'Report spills immediately to prevent permanent staining on carpets or surfaces',
    'Use door matting at all entry points to reduce dirt being tracked inside',
    'Rotate your deep-clean focus areas monthly for thorough overall coverage',
  ],
  checklist: [
    'Vacuuming and mopping all floors',
    'Dusting desks and all surfaces',
    'Wiping monitors and keyboards',
    'Sanitising door handles and light switches',
    'Cleaning bathrooms (toilets, sinks, mirrors)',
    'Restocking soap and paper towels',
    'Emptying bins and replacing liners',
    'Cleaning kitchen and breakroom',
    'Wiping down appliances (microwave, fridge)',
    'Internal window cleaning',
    'Spot cleaning walls and partitions',
    'Sanitising shared equipment',
  ],
};

export default function OfficeCleaningPage() {
  return (
    <>
      <Head>
        <title>Office & Workspace Cleaning Perth | SmartSpace Commercial Cleaning</title>
        <meta
          name="description"
          content="Professional office and workspace cleaning in Perth WA. SmartSpace delivers daily, weekly, and custom-scheduled office cleaning trusted by Perth CBD businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services/office-cleaning" />
        <meta property="og:title" content="Office & Workspace Cleaning Perth | SmartSpace" />
        <meta
          property="og:description"
          content="Professional office and workspace cleaning in Perth WA."
        />
      </Head>
      <ServiceDetailLayout {...props} />
    </>
  );
}
