import Image from "next/image";
import { MailIcon, Layout, Database, Zap, ShieldCheck, MapPin, Navigation } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAssetPath } from "@/lib/utils";

export const dynamic = 'force-static';

export default async function SomapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("somap");

  return (
    <div className="min-h-screen bg-bg selection:bg-teal/20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-teal/10 text-teal rounded-full">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-8">
              {t("hero.title")}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-text-muted leading-relaxed mb-10">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contato"
                className="w-full sm:w-auto rounded-full bg-navy px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-navy-mid transition-all"
              >
                {t("hero.cta_main")}
              </a>
              <a
                href="#recursos"
                className="w-full sm:w-auto rounded-full bg-white border-2 border-border px-8 py-3.5 text-sm font-bold text-navy hover:bg-bg transition-all"
              >
                {t("hero.cta_secondary")}
              </a>
            </div>
          </div>

          {/* Screenshot Hero */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-2">
              <div className="rounded-xl overflow-hidden border border-border/50">
                <Image
                  src={getAssetPath("/images/screenshot-map.png")}
                  alt="SOMAP Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Decor */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-teal/5 to-transparent blur-3xl" />
          </div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section id="recursos" className="py-24 bg-bg border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">{t("features.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{t("features.items.layers.title")}</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {t("features.items.layers.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{t("features.items.workspaces.title")}</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {t("features.items.workspaces.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{t("features.items.performance.title")}</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {t("features.items.performance.description")}
              </p>
            </div>
          </div>

          {/* Real-time Demos */}
          <div className="mt-24 pt-16 border-t border-border/60">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-navy">
                {t("demos.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Geocoding Demo Card */}
              <div className="bg-white rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Browser Mock Header */}
                  <div className="bg-bg border-b border-border/60 px-5 py-3 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  {/* Image Container (No extra nested card margins) */}
                  <div className="relative overflow-hidden bg-bg">
                    <Image
                      src={getAssetPath("/images/geocoding.gif")}
                      alt={t("demos.geocoding.title")}
                      width={1920}
                      height={1080}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Content below image */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                        <MapPin size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-navy">
                        {t("demos.geocoding.title")}
                      </h4>
                    </div>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {t("demos.geocoding.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Routing Demo Card */}
              <div className="bg-white rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Browser Mock Header */}
                  <div className="bg-bg border-b border-border/60 px-5 py-3 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  {/* Image Container (No extra nested card margins) */}
                  <div className="relative overflow-hidden bg-bg">
                    <Image
                      src={getAssetPath("/images/routing.gif")}
                      alt={t("demos.routing.title")}
                      width={1920}
                      height={1080}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Content below image */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                        <Navigation size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-navy">
                        {t("demos.routing.title")}
                      </h4>
                    </div>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {t("demos.routing.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mb-6">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Acesso Seguro e Sem Complicações
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                O SOMAP foi desenvolvido para ser acessado de qualquer lugar, sem necessidade de instalações ou plugins. Uma interface de login moderna e segura garante que seus dados geoespaciais estejam protegidos.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-navy font-medium">
                  <div className="w-2 h-2 bg-teal rounded-full" />
                  Conexão segura via Cloudflare Tunnel
                </li>
                <li className="flex items-center gap-3 text-navy font-medium">
                  <div className="w-2 h-2 bg-teal rounded-full" />
                  Gerenciamento de usuários e workspaces
                </li>
                <li className="flex items-center gap-3 text-navy font-medium">
                  <div className="w-2 h-2 bg-teal rounded-full" />
                  Interface responsiva para múltiplos dispositivos
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={getAssetPath("/images/screenshot-login.png")}
                alt="SOMAP Login"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="contato" className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg mb-10">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="w-full sm:w-auto rounded-full bg-white px-10 py-4 text-sm font-bold text-navy shadow-xl hover:bg-neutral-100 transition-all"
            >
              <MailIcon className="inline-block mr-2 w-5 h-5" />
              {t("cta.button")}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
