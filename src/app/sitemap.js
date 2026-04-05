export const dynamic = "force-static";

import cars from '@/data/listCarImages.json';

export default function sitemap() {
  const carEntries = cars.map((car) => ({
    url: `https://halo-toyota.com/mobil/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://halo-toyota.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://halo-toyota.com/daftar-harga',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...carEntries,
  ]
}
