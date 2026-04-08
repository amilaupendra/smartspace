import Link from 'next/link';
import Image from 'next/image';

/**
 * ServiceCard
 *
 * Props:
 *  - title      {string}       Service name
 *  - description{string}       Short description (2 sentences)
 *  - icon       {ReactElement} Lucide icon element
 *  - imageUrl   {string}       Unsplash image URL
 *  - imageAlt   {string}       Alt text for the image
 *  - showImage  {boolean}      Whether to render the image (default: true)
 *  - slug       {string}       href for "Learn More" link (default: /contact)
 */
export default function ServiceCard({
  title,
  description,
  icon,
  imageUrl,
  imageAlt,
  showImage = true,
  slug = '/contact',
}) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Card image */}
      {showImage && imageUrl && (
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Icon + title row */}
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl text-blue-600">
            {icon}
          </span>
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{title}</h3>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>

        <Link
          href={slug}
          className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:brightness-110 active:scale-95 transition-all duration-200 self-start"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
