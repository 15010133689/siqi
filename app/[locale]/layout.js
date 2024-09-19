import "./global.css"
import "./globals.css"
import {SessionProvider} from "next-auth/react";
import {auth} from "../../auth";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import Providers from "../../lib/store/Providers";
import ThemeCustom from "components/themes";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {Inter} from 'next/font/google'
import {WebVitals} from "components/analytics/web-vitals";

const inter = Inter({
    weight: '900',
    subsets: ['latin'],
    display: 'swap'
})
export const metadata = {
    title: {
        template: 'Elliot-Shop-Web | %s ',
        default: 'Elliot-Shop-Web'
    },
    description: 'Using Next.js',
    generator: 'Elliot',
    applicationName: 'elliot-shop-web',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Shop'],
    authors: [ { name: 'Elliot', url: 'https://elliot.com' }],
    creator: 'Elliot',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.elliot.com:4591'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
            'zh_CN': '/zh_CN',
        },
    },
    openGraph: {
        images: '/og-image.png',
    },
    verification: {
        google: 'baidu',
        other: {
            me: ['zhangqingwei804@gmail.com'],
        },
    },
    other: {
        custom: 'Elliot'
    }
}
export default function RootLayout({ authorize,children,params:{locale} }) {
  const session = auth()
  const messages = useMessages();
    return (
      <Providers>
          <ThemeCustom>
              <html lang={locale} className={inter.className}>
              <body>
                  <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                      <SessionProvider session={session}>
                          <NextIntlClientProvider locale={locale} messages={messages}>
                           <WebVitals />
                            {children}
                            {authorize}
                          </NextIntlClientProvider>
                      </SessionProvider>
                  </AppRouterCacheProvider>
              </body>
              </html>
          </ThemeCustom>
      </Providers>
  )
}
