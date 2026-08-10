"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

// On centralise les items pour éviter la répétition de code
const NAV_ITEMS = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "technology", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Détection automatique de la section au scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, // La section est active quand 60% est visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-3">
      <Section className="flex items-center justify-between">
        {/* Ton Nom / Branding */}
        <h1 className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          Haendel<span className="text-primary">.dev</span>
        </h1>

        {/* Navigation avec Animation de Pilule */}
        <nav className="hidden md:flex items-center gap-1 bg-primary/50 p-1 rounded-full border border-border/50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="relative px-4 py-2 text-sm font-medium outline-none transition-colors"
              onClick={() => setActiveSection(item.id)}
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
              </span>

              {/* L'élément qui bouge derrière le texte */}
              {activeSection === item.id && (
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
          ))}
        </nav>

        {/* Ton Logo avec Micro-interaction */}
        {/* Bouton CV Moderne & Cohérent */}
        <div className="flex items-center group">
          <a
            href="images/cv-Haendel.pdf" // Conseil : utilisez un PDF nommé professionnellement
            download
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-primary/50 text-white font-medium text-sm",
              "hover:ring-2 hover:ring-primary/20 hover:shadow-lg",
              "transition-all duration-300 active:scale-95",
            )}
          >
            <span>CV</span>
            <Download className="w-4 h-4 group-hover:animate-bounce" />
          </a>
        </div>
      </Section>
    </header>
  );
};
