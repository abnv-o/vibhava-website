'use client';

import Image from 'next/image';

const brands = [
  {
    name: 'Brand 1',
    logo: 'https://placehold.co/200x80/61c2a6/ffffff?text=Brand+1',
  },
  {
    name: 'Brand 2',
    logo: 'https://placehold.co/200x80/61c2a6/ffffff?text=Brand+2',
  },
  {
    name: 'Brand 3',
    logo: 'https://placehold.co/200x80/61c2a6/ffffff?text=Brand+3',
  },
  {
    name: 'Brand 4',
    logo: 'https://placehold.co/200x80/61c2a6/ffffff?text=Brand+4',
  },
  {
    name: 'Brand 5',
    logo: 'https://placehold.co/200x80/61c2a6/ffffff?text=Brand+5',
  },
];

const BrandMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white/5 py-8">
      <div className="relative flex animate-marquee">
        {/* First set of logos */}
        <div className="flex items-center space-x-16 px-8">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-32 grayscale transition-all hover:grayscale-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-16 px-8">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-duplicate-${index}`}
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-32 grayscale transition-all hover:grayscale-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee; 