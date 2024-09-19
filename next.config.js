/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "image.elliot.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**"
            }
        ],
        minimumCacheTTL: 60,//缓存超时时间
        // loader: 'custom',
        // loaderFile: './lib/image/loader.js'
    },
    experimental: {
        instrumentationHook: false,
        // serverActions: true,
    },
    reactStrictMode: true,
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: "standalone",
    // cacheHandler: require.resolve('./cache-handler.js'),
    // cacheMaxMemorySize: 0, // disable default in-memory caching
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withMDX = require('@next/mdx')()

const withNextIntl = require('next-intl/plugin')();

// module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
module.exports = withMDX(withBundleAnalyzer(withNextIntl(nextConfig)));
