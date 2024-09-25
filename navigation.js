import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en_US', 'zh_CN'];
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
