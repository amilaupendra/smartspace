import Head from 'next/head';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const props = {
  title: 'School & Classroom Cleaning',
  tagline: 'Safe, healthy spaces where students can thrive',
  heroImage:
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop',
  secondaryImage:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
  summary: [
    'Schools are high-traffic, high-touch environments where hygiene directly affects student health and attendance. SmartSpace uses child-safe, non-toxic cleaning products that meet WA Department of Education standards.',
    'We schedule all cleaning outside school hours to ensure zero disruption to learning. Our team is experienced with the unique demands of classrooms, canteens, toilets, libraries, and sports facilities.',
    'From primary schools in Joondalup to secondary colleges in Armadale, we deliver reliable, term-by-term cleaning contracts across the Perth metro area.',
  ],
  frequencyData: [
    { area: 'Classrooms',                  frequency: 'Daily',                  reason: 'Child health and allergen reduction' },
    { area: 'Toilets and bathrooms',        frequency: 'Daily + midday check',   reason: 'Hygiene for large student populations' },
    { area: 'Canteen and food areas',       frequency: 'Daily',                  reason: 'Food safety compliance' },
    { area: 'Hallways and entries',         frequency: 'Daily',                  reason: 'High foot traffic dirt control' },
    { area: 'Library',                      frequency: 'Weekly',                 reason: 'Dust and allergen control' },
    { area: 'Sports hall and gym',          frequency: 'Weekly',                 reason: 'Sweat, bacteria, and odour removal' },
    { area: 'Full deep clean',              frequency: 'Every school term',      reason: 'Reset between terms' },
  ],
  maintenanceTips: [
    'Encourage students to tidy desks and pack up at the end of each lesson',
    'Place hand sanitiser stations at every classroom entrance',
    'Schedule deep cleans during school holiday breaks for maximum access',
    'Use non-toxic, fragrance-free products to accommodate allergy-sensitive students',
    'Inspect and clean air vents each term to reduce dust circulation',
    'Provide dedicated bins in every classroom and high-traffic common area',
    'Brief all cleaning staff on safeguarding and child protection site policies',
  ],
  checklist: [
    'Vacuuming and mopping all classroom floors',
    'Wiping down student desks and chairs',
    'Sanitising door handles, light switches, and shared surfaces',
    'Cleaning bathrooms and restocking all supplies',
    'Emptying bins throughout the school',
    'Cleaning canteen benches and equipment',
    'Mopping hallways and entry areas',
    'Dusting shelving and windowsills',
    'Spot cleaning walls and lockers',
    'Cleaning staff rooms and administration areas',
    'Sanitising playground equipment on request',
    'Reporting any maintenance issues observed',
  ],
};

export default function SchoolCleaningPage() {
  return (
    <>
      <Head>
        <title>School & Classroom Cleaning Perth | SmartSpace Commercial Cleaning WA</title>
        <meta
          name="description"
          content="Child-safe school and classroom cleaning in Perth WA. SmartSpace delivers reliable daily and term-break cleans for primary and secondary schools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services/school-cleaning" />
        <meta property="og:title" content="School & Classroom Cleaning Perth | SmartSpace" />
        <meta
          property="og:description"
          content="Child-safe school and classroom cleaning in Perth WA."
        />
      </Head>
      <ServiceDetailLayout {...props} />
    </>
  );
}
