import Image from "next/image";
import {
  Coins,
  ShieldCheck,
  Navigation,
  ArrowRightIcon,
  MailIcon,
  Database,
  Cpu,
  BarChart3,
  Layers,
  AlertTriangle,
  Zap,
  GlobeIcon
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAssetPath } from "@/lib/utils";

export const dynamic = 'force-static';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-teal/20">
      
      {/* 1. Hero Section */}
      <section id="inicio" className="relative w-full overflow-hidden bg-white border-b border-border pt-32 pb-24 sm:py-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-teal/10 text-teal rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t('Hero.badge')}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-8 text-navy leading-tight">
            {t('Hero.title')}
          </h1>
          <p className="text-lg tracking-tight leading-8 text-text-muted max-w-3xl mx-auto mb-12">
            {t('Hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contato"
              className="w-full sm:w-auto rounded-full bg-teal px-10 py-4 text-sm font-bold text-white shadow-lg hover:bg-teal-light transition-all text-center flex items-center justify-center gap-2 group"
            >
              {t('Hero.cta_primary')}
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#desafio"
              className="w-full sm:w-auto rounded-full bg-white border-2 border-border px-10 py-3.5 text-sm font-bold text-navy hover:bg-bg-alt transition-all text-center"
            >
              {t('Nav.challenge')}
            </Link>
          </div>
        </div>
        
        {/* Dynamic Background decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-radial-gradient from-teal/10 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-radial-gradient from-navy/5 to-transparent blur-3xl rounded-full" />
        </div>
      </section>

      {/* 2. Value Proposition (Domínio da Esteira) */}
      <section id="sobre" className="py-24 sm:py-32 bg-bg-alt border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-navy">
              {t('ValueProp.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              {t('ValueProp.description')}
            </p>
          </div>

          <div className="grid max-w-xl grid-cols-1 gap-8 mx-auto sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 — Databases */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('ValueProp.items.databases.title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('ValueProp.items.databases.description')}
              </p>
            </div>

            {/* Card 2 — Integration */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('ValueProp.items.integration.title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('ValueProp.items.integration.description')}
              </p>
            </div>

            {/* Card 3 — Analytics */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('ValueProp.items.analytics.title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('ValueProp.items.analytics.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Challenge Section (The API Trap) */}
      <section id="desafio" className="py-24 sm:py-32 bg-white border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-navy mb-6">
                {t('Challenge.title')}
              </h2>
              <p className="text-xl font-medium text-teal mb-4">
                {t('Challenge.subtitle')}
              </p>
              <p className="text-base leading-relaxed text-text-muted mb-8">
                {t('Challenge.description')}
              </p>
            </div>

            <div className="space-y-6">
              {/* Scenario 1: Third-party trap */}
              <div className="p-6 rounded-2xl border-l-4 border-red-500 bg-red-50/50 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{t('Challenge.card_commercial_title')}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{t('Challenge.card_commercial_desc')}</p>
                </div>
              </div>

              {/* Scenario 2: Local sovereignty */}
              <div className="p-6 rounded-2xl border-l-4 border-teal bg-teal/5 flex gap-4">
                <Zap className="w-6 h-6 text-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{t('Challenge.card_local_title')}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{t('Challenge.card_local_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOMAP Engine Section */}
      <section id="somap" className="py-24 sm:py-32 bg-bg-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Browser mockup of mapping interface */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-white p-2">
                <div className="bg-white border-b border-border/60 px-4 py-2.5 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="w-40 h-4 bg-bg-alt rounded mx-auto" />
                </div>
                <div className="relative overflow-hidden bg-bg">
                  <Image
                    src={getAssetPath("/images/screenshot-map.png")}
                    alt={t('SomapEngine.screenshot_alt')}
                    width={1200}
                    height={800}
                    className="w-full h-auto hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-teal font-bold tracking-widest uppercase text-xs mb-4 block">
                {t('SomapEngine.badge')}
              </span>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl mb-6">
                {t('SomapEngine.title')}
              </h2>
              <p className="text-lg leading-relaxed text-text-muted mb-8">
                {t('SomapEngine.description')}
              </p>
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 text-teal font-bold hover:text-teal-light transition-colors group text-sm"
              >
                {t('Hero.cta_primary')}
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pillars Section */}
      <section id="pilares" className="py-24 sm:py-32 bg-white border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-navy">
              {t('Pillars.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              {t('Pillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 — Previsibilidade */}
            <div className="bg-bg-alt p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <Coins size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {t('Pillars.routing_title')}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t('Pillars.routing_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 2 — BI */}
            <div className="bg-bg-alt p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {t('Pillars.bi_title')}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t('Pillars.bi_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 3 — Topology */}
            <div className="bg-bg-alt p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <Navigation size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {t('Pillars.topology_title')}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t('Pillars.topology_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Custom Engineering Section */}
      <section id="engenharia" className="py-24 sm:py-32 bg-bg-alt border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-navy">
              {t('CustomEngineering.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              {t('CustomEngineering.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 — Observation */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('CustomEngineering.observation_title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('CustomEngineering.observation_desc')}
              </p>
            </div>

            {/* Card 2 — Logistics */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('CustomEngineering.logistics_title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('CustomEngineering.logistics_desc')}
              </p>
            </div>

            {/* Card 3 — Infrastructure */}
            <div className="flex flex-col p-8 bg-white rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-all">
              <div className="rounded-2xl bg-teal/10 p-3 mb-6 inline-flex self-start text-teal">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {t('CustomEngineering.infrastructure_title')}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {t('CustomEngineering.infrastructure_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact / Call to Action */}
      <section id="contato" className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('Contact.title')}
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('Contact.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="w-full sm:w-auto rounded-full bg-white px-10 py-4 text-sm font-bold text-navy shadow-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              {t('Contact.cta_main')}
            </a>
            <a
              href="mailto:soliveira796@gmail.com"
              className="w-full sm:w-auto rounded-full bg-transparent border-2 border-white/30 px-10 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all text-center"
            >
              soliveira796@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
