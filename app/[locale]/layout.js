import "./global.css"
import "./globals.css"
import {SessionProvider} from "next-auth/react";
import {auth} from "../../auth";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import Providers from "../../lib/store/Providers";
import ThemeCustom from "components/themes";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {WebVitals} from "components/analytics/web-vitals";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
    title: {
        template: 'siqi | %s ',
        default: 'siqi'
    },
    description: 'Using Next.js',
    generator: 'Elliot',
    applicationName: 'siqi',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Java'],
    authors: [ { name: 'Elliot', url: 'http://www.searchsingle.top' }],
    creator: 'Elliot',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('http://www.searchsingle.top'),
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
            me: ['691159453@qq.com'],
        },
    },
    other: {
        custom: 'Elliot',
        'baidu-site-verification': 'codeva-fk435IFxfM',
    }
}
export default function RootLayout({ authorize,children,params:{locale} }) {
  const session = auth()
  const messages = useMessages();
    return (
      <Providers>
          <ThemeCustom>
              <html lang={locale}>
              <body>
              <AppRouterCacheProvider options={{enableCssLayer: true}}>
                  <SessionProvider session={session}>
                      <NextIntlClientProvider locale={locale} messages={messages}>
                          <WebVitals/>
                          <Header/>
                          {children}
                          <Footer/>
                          {authorize}
                      </NextIntlClientProvider>
                  </SessionProvider>
              </AppRouterCacheProvider>
              <script src="https://hm.baidu.com/hm.js?ad0edd76d04f479b41d9caaf5923d074"></script>
              </body>
              </html>
          </ThemeCustom>
      </Providers>
    )
}
