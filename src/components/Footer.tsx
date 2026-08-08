import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/silas-oliveira-41a633186/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/silasogis?igsh=MTV6dHJnZml3d3B4bg==", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@silasetgeo", label: "YouTube" },
  ];

  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/#inicio" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src={getAssetPath("/images/somap-icons/somap-mark-paper.svg")} 
                  alt="SOGIS Logo" 
                  width={20} 
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-navy font-bold text-xl tracking-tight">SOGIS</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {t("Hero.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy/60 hover:text-teal hover:border-teal hover:bg-teal/5 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-navy font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#inicio" className="text-text-muted text-sm hover:text-teal transition-colors">
                  {t("Nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/#desafio" className="text-text-muted text-sm hover:text-teal transition-colors">
                  {t("Nav.challenge")}
                </Link>
              </li>
              <li>
                <Link href="/#somap" className="text-text-muted text-sm hover:text-teal transition-colors">
                  {t("Nav.somap")}
                </Link>
              </li>
              <li>
                <Link href="/#pilares" className="text-text-muted text-sm hover:text-teal transition-colors">
                  {t("Nav.pillars")}
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-text-muted text-sm hover:text-teal transition-colors">
                  {t("Nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-navy font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Mail size={18} className="text-teal shrink-0" />
                <a href="mailto:soliveira796@gmail.com" className="hover:text-teal">
                  soliveira796@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={18} className="text-teal shrink-0" />
                <span>Brasil / Remoto</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs">
            &copy; {currentYear} Silas Oliveira Geospatial. {t("Common.footer.rights")}
          </p>
          <div className="flex gap-8">
             <Link href="#" className="text-text-muted text-xs hover:text-navy">Privacidade</Link>
             <Link href="#" className="text-text-muted text-xs hover:text-navy">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
