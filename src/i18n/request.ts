import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async (params) => {
  // Support both requestLocale (latest) and locale (some 4.x versions)
  let locale = await params.requestLocale;
  if (!locale) locale = (params as any).locale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
