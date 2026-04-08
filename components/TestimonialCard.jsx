import { Star } from 'lucide-react';

/**
 * TestimonialCard
 *
 * Props:
 *  - name    {string} Reviewer name
 *  - company {string} Company / role
 *  - review  {string} Review text
 *  - rating  {number} Star count (default: 5)
 */
export default function TestimonialCard({ name, company, review, rating = 5 }) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col gap-4">
      {/* Star rating */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        {/* Avatar placeholder — initials */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none">
          {name
            .split(' ')
            .slice(0, 2)
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{company}</p>
        </div>
      </div>
    </article>
  );
}
