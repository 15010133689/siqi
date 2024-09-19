export default function manifest() {
    return {
        name: 'Elliot-Shop-Web',
        short_name: 'Elliot',
        description: 'Elliot Shop',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}