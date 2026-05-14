import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRightIcon, MailIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamic = 'force-static';

export default async function ConsultoriaGIS({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Consulting");
  const tCommon = await getTranslations("Common");

  return (
    <div className="min-h-screen bg-bg text-color-text font-body selection:bg-teal/20">

      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-white border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-navy">
            {t('hero.title')} <span className="text-teal">{t('hero.accent')}</span>
          </h1>
          <p className="mt-6 text-lg tracking-tight leading-8 text-text-muted max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* 2. Seção: Migração para Open Source GIS (Split section with Video) */}
      <section className="py-24 sm:py-32 bg-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy mb-6">
                {t('migration.title')}
              </h2>
              <p className="text-lg leading-8 text-text-muted mb-6">
                {t('migration.description')}
              </p>
              <ul className="space-y-4 text-base leading-7 text-text-muted list-decimal list-inside mb-8">
                {(t.raw('migration.items') as string[]).map((item, idx) => {
                  const [title, desc] = item.split(' — ');
                  return (
                    <li key={idx}>
                      <strong className="text-navy">{title}</strong> — {desc}
                    </li>
                  );
                })}
              </ul>
              <Link href="/#contato" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal transition-all">
                {t('migration.cta')} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-bg-alt">
              <video
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/13174865_2160_3838_30fps.mp4`}
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção: Design de Banco de Dados Espacial */}
      <section className="py-24 sm:py-32 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="order-2 lg:order-1 relative w-full h-64 sm:h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-bg-alt">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/Postgresql-and-PostGIS-small-1-2048x782.webp`}
                alt={t('database.title')}
                fill
                className="object-contain p-8"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy mb-6">
                {t('database.title')}
              </h2>
              <p className="text-lg leading-8 text-text-muted mb-8">
                {t('database.description')}
              </p>
              <Link href="/#contato" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal transition-all">
                {t('migration.cta')} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção: Desenvolvimento QGIS */}
      <section className="py-24 sm:py-32 bg-bg border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy mb-6">
                {t('qgis.title')}
              </h2>
              <p className="text-lg leading-8 text-text-muted mb-8">
                {t('qgis.description')}
              </p>
              <Link href="/#contato" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal transition-all">
                {t('migration.cta')} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative flex justify-center items-center w-full h-[300px] lg:h-[400px] p-8">
              <div className="relative w-full h-full max-w-sm drop-shadow-2xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/qgis-logo.webp`}
                  alt={t('qgis.title')}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção: Produtos de Dados Geoespaciais */}
      <section className="py-24 sm:py-32 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="order-2 lg:order-1 relative w-full h-64 sm:h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-bg-alt">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/pexels-dawidtkocz-35757435.jpg`}
                alt={t('products.title')}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy mb-6">
                {t('products.title')}
              </h2>
              <p className="text-lg leading-8 text-text-muted mb-6">
                {t('products.description')}
              </p>
              <ul className="space-y-2 text-base leading-7 text-text-muted list-disc list-inside mb-8">
                {(t.raw('products.items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Link href="/#contato" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal transition-all">
                {t('migration.cta')} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Rodapé da página (CTA de contato) */}
      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy">
            {t('contact_cta.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            {t('contact_cta.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-navy-mid transition-all w-full sm:w-auto"
            >
              <MailIcon className="h-5 w-5" />
              {t('contact_cta.button_main')}
            </a>
            <Link
              href="/"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-white border-2 border-border px-8 py-3.5 text-sm font-bold text-navy shadow-sm hover:bg-bg transition-all w-full sm:w-auto"
            >
              {t('contact_cta.button_back')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
