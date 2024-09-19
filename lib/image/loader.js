export default function alicdnLoader({ src, width, quality }) {
    return `http://image.elliot.com${src}?w=${width}&q=${quality || 75}`
}