import Head from 'next/head';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const props = {
  title: 'Regular Scheduled Cleaning',
  tagline: 'Consistent cleanliness — on your schedule, every time',
  heroImage:
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&auto=format&fit=crop',
  secondaryImage:
    'https://images.unsplash.com/photo-1527515637462-cff94edd56f9?w=800&auto=format&fit=crop',
  summary: [
    'A scheduled cleaning contract with SmartSpace means you never have to think about cleaning again. We assign a dedicated team to your premises, manage all supplies and equipment, and show up reliably — every time.',
    'Choose from daily, three-times-weekly, fortnightly, or monthly visits depending on your business type and foot traffic. All contracts include a satisfaction guarantee and a dedicated account manager.',
    'SmartSpace currently manages scheduled contracts for offices, retail stores, medical centres, schools, and warehouses across the Perth metropolitan area and surrounding suburbs.',
  ],
  frequencyData: [
    { area: 'High-traffic offices',    frequency: 'Daily',                      reason: 'Staff and client-facing environment' },
    { area: 'Small offices',            frequency: '3x per week',                reason: 'Cost-effective maintenance' },
    { area: 'Retail stores',            frequency: 'Daily or end-of-day',        reason: 'Customer-facing presentation' },
    { area: 'Warehouses',               frequency: 'Weekly',                     reason: 'Dust, debris, and safety compliance' },
    { area: 'Medical and dental',       frequency: 'Daily',                      reason: 'Infection control requirements' },
    { area: 'Schools',                  frequency: 'Daily + term deep clean',    reason: 'Student volume and hygiene needs' },
    { area: 'Restaurants',             frequency: 'Daily + weekly deep clean',  reason: 'Food safety compliance' },
  ],
  maintenanceTips: [
    'Assign a staff contact point for the cleaning team on every visit',
    'Provide secure key or access card arrangements for after-hours cleaning',
    'Communicate any changed requirements at least 24 hours in advance',
    'Review and sign off on the monthly checklist report provided by SmartSpace',
    'Flag any areas needing extra attention before each scheduled visit',
    'Conduct a quarterly walkthrough with your SmartSpace account manager',
    'Keep a record of supplies used to avoid mid-contract shortages',
  ],
  checklist: [
    'Full agreed scope completed on every scheduled visit',
    'Consistent dedicated team assigned to your premises',
    'All supplies and equipment provided by SmartSpace',
    'Digital or paper clean log left after each visit',
    'Account manager available for queries and changes',
    'Flexible rescheduling available for public holidays',
    'Monthly performance review available on request',
    'Spot cleans available between scheduled visits',
    'Annual deep clean included in long-term contracts',
    'Insurance certificates provided on request',
    'Police-checked staff on all assignments',
    'Satisfaction guarantee on every single visit',
  ],
};

export default function ScheduledCleaningPage() {
  return (
    <>
      <Head>
        <title>Scheduled Commercial Cleaning Perth | SmartSpace Cleaning WA</title>
        <meta
          name="description"
          content="Regular scheduled commercial cleaning contracts in Perth WA. SmartSpace manages daily, weekly, and fortnightly plans for offices, retail, schools, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smartspacecleaning.com.au/services/scheduled-cleaning" />
        <meta property="og:title" content="Scheduled Commercial Cleaning Perth | SmartSpace" />
        <meta
          property="og:description"
          content="Regular scheduled commercial cleaning contracts in Perth WA."
        />
      </Head>
      <ServiceDetailLayout {...props} />
    </>
  );
}
