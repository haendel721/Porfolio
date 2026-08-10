"use client";

import { motion, spring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { NextLogo } from "./icons/NextLogo";
import { SymfonyLogo } from "./icons/SymfonyLogo";
import { HtmlLogo } from "./icons/HtmlLogo";
import { CssLogo } from "./icons/CssLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { MySqlLogo } from "./icons/MySqlLogo";
import { OracleLogo } from "./icons/OracleLogo";
import { BootstrapLogo } from "./icons/BootstrapLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { JavaLogo } from "./icons/JavaLogo";

export const SKILLS_DATA = [
  { name: "React", Logo: ReactLogo },
  { name: "Laravel", Logo: LaravelLogo },
  { name: "Next.js", Logo: NextLogo },
  { name: "Symfony", Logo: SymfonyLogo },
  { name: "HTML", Logo: HtmlLogo },
  { name: "CSS", Logo: CssLogo },
  { name: "PHP", Logo: PhpLogo },
  { name: "JavaScript", Logo: JavascriptLogo },
  { name: "MySQL", Logo: MySqlLogo },
  { name: "Oracle", Logo: OracleLogo },
  { name: "Bootstrap", Logo: BootstrapLogo },
  { name: "Tailwind", Logo: TailwindLogo },
  { name: "Java", Logo: JavaLogo },
];

// Animation du conteneur (gère le décalage entre les enfants)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Apparition l'un après l'autre
    },
  },
};

// Animation de chaque icône
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: spring, stiffness: 260, damping: 20 },
  },
};

export const Skills = () => {
  return (
    <Section
      className="scroll-mt-15 flex flex-col items-start gap-6"
      id="technology"
    >
      <Badge>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight">
        I love working with these technologies
      </h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 py-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col gap-2 items-center group"
          >
            {/* Animation de flottaison continue au survol */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.1,
                // rotate: index % 2 === 0 ? 5 : -5, // Rotation légère alternée
              }}
              className="p-3 rounded-2xl bg-accent/30 border border-transparent group-hover:border-primary/20 group-hover:bg-secondary/50 transition-colors"
            >
              <skill.Logo size={42} />
            </motion.div>
            <h3 className="text-muted-foreground text-sm font-medium tracking-tight group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
