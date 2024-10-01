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
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withMDX = require('@next/mdx')()

const withNextIntl = require('next-intl/plugin')();

// module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
module.exports = withMDX(withBundleAnalyzer(withNextIntl(nextConfig)));
