import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns [ref, isVisible].
 * Uses IntersectionObserver to detect when the element enters the viewport.
 */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing so the animation only fires once
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * FadeInSection
 * Wrap any section in this component to get a fade-in-from-below animation
 * when the section enters the viewport.
 *
 * Usage:
 *   <FadeInSection>
 *     <YourContent />
 *   </FadeInSection>
 */
export default function FadeInSection({ children, className = '' }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-section${isVisible ? ' is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
