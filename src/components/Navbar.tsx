"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#inicio", label: t("home") },
    { href: "/#desafio", label: t("challenge") },
    { href: "/#somap", label: t("somap") },
    { href: "/#pilares", label: t("pillars") },
    { href: "/#contato", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <Image 
                src={getAssetPath("/images/somap-icons/somap-mark-paper.svg")} 
                alt="SOGIS Logo" 
                width={24} 
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-navy font-bold text-lg tracking-tight">SOGIS</span>
              <span className="text-teal text-[10px] font-bold tracking-widest uppercase">Geospatial</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <LanguageSwitcher />

            <Link
              href="/#contato"
              className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-mid transition-all shadow-sm hover:shadow-md"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-navy"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
             <span className="text-sm font-medium text-text-muted flex items-center gap-2">
               <Globe size={16} /> Language
             </span>
             <LanguageSwitcher />
          </div>
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="bg-navy text-white px-5 py-4 rounded-2xl text-center font-bold shadow-lg"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
