// src/components/Banner.jsx
import { useEffect, useRef } from 'react';

const Banner = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY * 0.35;

          if (bgRef.current) {
            bgRef.current.style.transform =
              `translateY(${offset}px) scale(1.2)`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/test.webp')",
          height: '120%',
          transformOrigin: 'center',
        }}
      />

      <div className="relative flex items-center justify-center h-full" />
    </div>
  );
};

export default Banner;