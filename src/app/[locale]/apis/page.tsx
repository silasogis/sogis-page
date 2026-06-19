import { getTranslations, setRequestLocale } from "next-intl/server";
import { ShieldCheck, Zap, Truck, Sliders, MailIcon } from "lucide-react";
import ApiConsole from "@/components/ApiConsole";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "apis" });
  return {
    title: `${t("hero.badge")} | Silas Oliveira Geospatial`,
    description: t("hero.description"),
  };
}

export default async function ApisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("apis");

  return (
    <div className="min-h-screen bg-bg selection:bg-teal/20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-teal/10 text-teal rounded-full">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-8 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#sandbox"
                className="w-full sm:w-auto rounded-full bg-navy px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-navy-mid transition-all text-center"
              >
                {t("hero.cta_main")}
              </a>
              <a
                href="#licenciamento"
                className="w-full sm:w-auto rounded-full bg-white border-2 border-border px-8 py-3.5 text-sm font-bold text-navy hover:bg-bg transition-all text-center"
              >
                {t("hero.cta_secondary")}
              </a>
            </div>
          </div>
        </div>
        
        {/* Dynamic Background decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-radial-gradient from-teal/10 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-radial-gradient from-navy/5 to-transparent blur-3xl rounded-full" />
        </div>
      </section>

      {/* 2. Business/Licensing Pillars Section */}
      <section id="licenciamento" className="py-24 bg-bg border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {t("pillars.title")}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t("pillars.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* On-Premise card */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">{t("pillars.onprem.title")}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t("pillars.onprem.description")}
                </p>
              </div>
            </div>

            {/* SaaS B2B card */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">{t("pillars.saas.title")}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t("pillars.saas.description")}
                </p>
              </div>
            </div>

            {/* Logistics Consulting card */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">{t("pillars.logistics.title")}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t("pillars.logistics.description")}
                </p>
              </div>
            </div>

            {/* Customization card */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-card hover:shadow-card-hover transition-all flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal shrink-0">
                <Sliders size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">{t("pillars.custom.title")}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {t("pillars.custom.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. API Sandbox Sandbox Playground */}
      <section id="sandbox" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {t("console.title")}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t("console.description")}
            </p>
          </div>

          <ApiConsole />
        </div>
      </section>

      {/* 4. Commercial CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="w-full sm:w-auto rounded-full bg-white px-10 py-4 text-sm font-bold text-navy shadow-xl hover:bg-neutral-100 transition-all flex items-center justify-center"
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
