import Image from "next/image";
import {
  MapIcon,
  CodeIcon,
  ServerIcon,
  CloudIcon,
  BookOpenIcon,
  UsersIcon,
  DatabaseIcon,
  TerminalIcon,
  GlobeIcon,
  ExternalLinkIcon,
  MailIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAssetPath } from "@/lib/utils";

export const dynamic = 'force-static';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  // We don't need to await params here if we use setRequestLocale in the layout, 
  // but next-intl recommends it in pages too for static export.
  // Actually, let's just use the translations.

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-teal/20">
      
      {/* 1. Header / Hero Section */}
      <section className="relative w-full overflow-hidden bg-white border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-navy">
            {t('Hero.title')}
          </h1>
          <p className="mt-6 text-lg tracking-tight leading-8 text-text-muted max-w-3xl mx-auto">
            {t('Hero.description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#servicos"
              className="rounded-full bg-teal px-10 py-4 text-sm font-bold text-white shadow-lg hover:bg-teal-light transition-all"
            >
              {t('Hero.cta_primary')}
            </Link>
          </div>
        </div>
      </section>

      {/* 1.1 SOMAP Glimpse Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-bg-alt">
                <Image
                  src={getAssetPath("/images/screenshot-map.png")}
                  alt="SOMAP Glimpse"
                  width={1200}
                  height={800}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-teal font-bold tracking-widest uppercase text-xs mb-4 block">Product Showcase</span>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl mb-6">
                {t('SomapGlimpse.title')}
              </h2>
              <p className="text-lg leading-8 text-text-muted mb-8">
                {t('SomapGlimpse.description')}
              </p>
              <Link
                href="/somap"
                className="inline-flex items-center gap-2 text-navy font-bold hover:text-teal transition-colors group"
              >
                {t('SomapGlimpse.cta')} 
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção: Especialista em Open Source GIS */}
      <section id="sobre" className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('ValueProp.title')}</h2>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              {t('ValueProp.description')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">

              {/* Card 1 — Bancos de Dados */}
              <div className="flex flex-col p-6 bg-surface rounded-2xl shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="rounded-lg bg-teal/10 p-3 mb-4 inline-flex self-start">
                  <DatabaseIcon className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">{t('ValueProp.items.databases.title')}</dt>
                <dd className="mt-2 text-base leading-7 text-text-muted flex-grow">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {(t.raw('ValueProp.items.databases.list') as string[]).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>

              {/* Card 2 — Desktop & Servidores GIS */}
              <div className="flex flex-col p-6 bg-surface rounded-2xl shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="rounded-lg bg-teal/10 p-3 mb-4 inline-flex self-start">
                  <TerminalIcon className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">{t('ValueProp.items.desktop.title')}</dt>
                <dd className="mt-2 text-base leading-7 text-text-muted flex-grow">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {(t.raw('ValueProp.items.desktop.list') as string[]).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>

              {/* Card 3 — Desenvolvimento Web */}
              <div className="flex flex-col p-6 bg-surface rounded-2xl shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="rounded-lg bg-teal/10 p-3 mb-4 inline-flex self-start">
                  <GlobeIcon className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">{t('ValueProp.items.dev.title')}</dt>
                <dd className="mt-2 text-base leading-7 text-text-muted flex-grow">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {(t.raw('ValueProp.items.dev.list') as string[]).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>

            </dl>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-teal hover:text-teal-light transition-colors"
            >
              {t('ValueProp.learn_more')} <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Seção principal: Meus Serviços e Produtos */}
      <section id="servicos" className="py-24 sm:py-32 bg-white border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('Services.title')}</h2>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              {t('Services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <MapIcon className="h-8 w-8 text-teal mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.consulting.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.consulting.description')}
              </p>
              <Link href="/consultoria-gis" className="text-sm font-semibold text-teal">{t('Services.items.consulting.link')} &rarr;</Link>
            </div>
            
            {/* Service 2 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <CodeIcon className="h-8 w-8 text-teal mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.dev.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.dev.description')}
              </p>
              <Link href="/#contato" className="text-sm font-semibold text-teal">{t('Services.items.dev.link')} &rarr;</Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <ServerIcon className="h-8 w-8 text-teal mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.geoserver.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.geoserver.description')}
              </p>
              <Link href="/#contato" className="text-sm font-semibold text-teal">{t('Services.items.geoserver.link')} &rarr;</Link>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <GlobeIcon className="h-8 w-8 text-teal mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.geomap.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.geomap.description')}
              </p>
              <Link href="/#contato" className="text-sm font-semibold text-teal">{t('Services.items.geomap.link')} &rarr;</Link>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <CloudIcon className="h-8 w-8 text-teal mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.hosting.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.hosting.description')}
              </p>
              <Link href="/#contato" className="text-sm font-semibold text-teal">{t('Services.items.hosting.link')} &rarr;</Link>
            </div>

            {/* Service 6 (SOMAP) */}
            <div className="flex flex-col bg-navy p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform duration-300 shadow-xl group">
              <div className="flex items-center gap-3 mb-6">
                <GlobeIcon className="h-8 w-8 text-teal" />
                <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">Proprietary</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('Services.items.somap.title')}</h3>
              <p className="text-white/70 mb-6 flex-grow text-sm">
                {t('Services.items.somap.description')}
              </p>
              <Link href="/somap" className="text-sm font-bold text-teal group-hover:text-white transition-colors">
                {t('Services.items.somap.link')} &rarr;
              </Link>
            </div>

            {/* Service 6.5 (APIs) */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300 shadow-card hover:shadow-card-hover group">
              <div className="flex items-center gap-3 mb-6">
                <TerminalIcon className="h-8 w-8 text-teal animate-pulse" />
                <span className="text-teal font-bold text-[10px] tracking-widest uppercase">GIS APIs</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{t('Services.items.apis.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow text-sm">
                {t('Services.items.apis.description')}
              </p>
              <Link href="/apis" className="text-sm font-bold text-teal hover:text-teal-light transition-colors">
                {t('Services.items.apis.link')} &rarr;
              </Link>
            </div>

            {/* Service 7 */}
            <div className="flex flex-col bg-bg-alt p-8 rounded-3xl border border-border hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BookOpenIcon className="h-8 w-8 text-teal" />
                <UsersIcon className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('Services.items.training.title')}</h3>
              <p className="text-text-muted mb-6 flex-grow">
                {t('Services.items.training.description')}
              </p>
              <Link href="/#contato" className="text-sm font-semibold text-teal">{t('Services.items.training.link')} &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção: Suporte Open Source GIS */}
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">{t('Support.title')}</h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              {t('Support.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contato"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all shadow-lg"
              >
                {t('Support.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção Final / CTA Principal */}
      <section id="contato" className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('Contact.title')}</h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            {t('Contact.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-navy-mid transition-all w-full sm:w-auto"
            >
              <MailIcon className="h-5 w-5" />
              {t('Contact.cta_main')}
            </a>
            <a
              href="mailto:soliveira796@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-white border-2 border-border px-8 py-3.5 text-sm font-semibold text-navy shadow-sm hover:bg-bg transition-all w-full sm:w-auto"
            >
              {t('Contact.cta_email')}: soliveira796@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
