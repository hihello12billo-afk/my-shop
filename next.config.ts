/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // For Google Profile Pictures
      },
    ],
  },
  // THE INVISIBLE SHIELD
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload' // Force HTTPS for 2 years
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block' // Stop scripts from running if injected
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Prevents others from putting your site in an iframe
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Prevents browsers from guessing file types
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin' // Protects user privacy
          }
        ],
      },
    ];
  },
};

export default nextConfig;