import {auth} from "./auth";
import {locales} from "./navigation";
import createIntlMiddleware from 'next-intl/middleware';


const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'zh_CN'
});

const authMiddleware = auth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    (req) => intlMiddleware(req)
);


export default function middleware(req) {
  return authMiddleware(req);
}

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", '/(en_US|zh_CN)/:path*'],
}
