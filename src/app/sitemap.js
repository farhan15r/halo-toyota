export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: 'https://halo-toyota.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other routes here as they are created
  ]
}
