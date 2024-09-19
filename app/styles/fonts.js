// nextjs fonts字体定义
import { Inter, Lora, Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const inter = Inter({
    weight: '900',
    subsets: ['latin'],
    display: 'swap'
})
const lora = Lora({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({
    weight: '200',
    subsets: ['latin'],
    display: 'swap'
})
const sourceCodePro700 = Source_Sans_3({
    weight: '900',
    subsets: ['latin'],
    display: 'swap'
})
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })

export { inter, lora, sourceCodePro400, sourceCodePro700 }