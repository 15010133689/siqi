export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/private/'],
            },
            {
                userAgent: ['Applebot', 'Bingbot', 'Baiduspider'],
                allow: ['/'],
                disallow: ['/private'],
            },
        ],
        sitemap: 'https://acme.com/sitemap.xml',
    }
}