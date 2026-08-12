"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { Download, Home, Info, Code, Mail, Menu, X } from "lucide-react";

// Centralisation des items pour le menu
const NAV_ITEMS = [
  { id: "home", label: "Accueil", logo: Home },
  { id: "about", label: "À propos", logo: Info },
  { id: "technology", label: "Technologies", logo: Code },
  { id: "contact", label: "Contact", logo: Mail },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Détection automatique de la section au scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-3">
      <Section className="flex items-center justify-between">
        {/* Branding / Logo */}
        <Link
          href="#home"
          onClick={() => setActiveSection("home")}
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          Haendel<span className="text-primary">.dev</span>
        </Link>

        {/* Navigation Desktop avec Animation de Pilule */}
        <nav className="hidden md:flex items-center gap-1 bg-primary/50 p-1 rounded-full border border-border/50">
          {NAV_ITEMS.map((item) => {
            const Icon = item.logo;
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium outline-none transition-colors group rounded-full",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary",
                )}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative z-10 transition-colors duration-300">
                  {item.label}
                </span>

                {/* Pilule active animée */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (CV + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          <a
            href="images/cv-Haendel.pdf"
            download
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full group",
              "bg-primary/50 text-white font-medium text-sm",
              "hover:ring-2 hover:ring-primary/20 hover:shadow-lg",
              "transition-all duration-300 active:scale-95",
            )}
          >
            <span>CV</span>
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-border/50 bg-primary/20 text-foreground hover:bg-primary/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Section>

      {/* Menu Mobile Déroulant */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur overflow-hidden"
          >
            <Section className="py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.logo;
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors",
                      isActive
                        ? "bg-primary/20 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                    )}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

