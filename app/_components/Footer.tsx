import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-5 flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          @Copyright 2026 - Réalisé par Rainimamorisoa
        </p>
      </Section>
    </footer>
  );
};
