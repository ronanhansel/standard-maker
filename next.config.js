import { promises as fs } from 'fs';
import NextBundleAnalyzer from '@next/bundle-analyzer';

const packageJSON = JSON.parse(await fs.readFile('./package.json', 'utf8'));

// @ts-check

/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  env: {
    NEXT_PUBLIC_VERSION: packageJSON.version
  },
  webpack: (config, { isServer }) => {
    // https://stackoverflow.com/a/68098547
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
        url: false,
        net: false,
        tls: false,
        child_process: false,
        dgram: false,
        dns: false,
        tty: false,
        cluster: false,
        readline: false,
        repl: false,
        vm: false,
        worker_threads: false
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.lecole.tech',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'img.vietqr.io',
        port: '',
        pathname: '/**'
      }
    ]
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async rewrites() {
    return [
      {
        source: '/:locale/manifest.webmanifest',
        destination: '/manifest.webmanifest'
      },
      {
        source: '/:locale/web-app-manifest-192x192.png',
        destination: '/web-app-manifest-192x192.png'
      },
      {
        source: '/:locale/web-app-manifest-512x512.png',
        destination: '/web-app-manifest-512x512.png'
      },
      {
        source: '/:locale/icon0.svg',
        destination: '/icon0.svg'
      },
      {
        source: '/:locale/icon1.svg',
        destination: '/icon1.svg'
      },
      {
        source: '/:locale/apple-icon.png',
        destination: '/apple-icon.png'
      },
      {
        source: '/:locale*/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*'
      },
      {
        source: '/:locale*/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*'
      },
      {
        source: '/:locale*/ingest/decide',
        destination: 'https://us.i.posthog.com/decide'
      }
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true
};

export default withBundleAnalyzer(nextConfig);
