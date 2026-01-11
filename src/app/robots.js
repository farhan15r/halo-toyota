export const dynamic = "force-static";

/**
 * metadata
 * @type {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    /**
     * rules
     * @type {import('next').MetadataRoute.Robots['rules']}
     */
    rules: [
      {
        userAgent: [
          'Amazonbot',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'ClaudeBot',
          'Google-Extended',
          'GPTBot',
          'meta-externalagent',
        ],
        disallow: [
          '/',
        ],
      },
      {
        userAgent: '*',
        allow: [
          '/',
        ]
      },
    ],
    sitemap: 'https://halotoyota.com/sitemap.xml',
  }
}
