export const dynamic = "force-static";

export default function sitemap() {
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
      priority: 1,
    }
  ]
}
