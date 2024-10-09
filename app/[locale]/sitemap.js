export default function sitemap() {
    return [
        {
            url: 'http://www.searchsingle.top',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'http://www.searchsingle.top/home',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]
}