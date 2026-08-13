"use client";

import { motion, Variants } from "framer-motion";
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
import { N8nLogo } from "./icons/N8nLogo";
import { Puzzle } from "lucide-react";

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
  { name: "n8n", Logo: N8nLogo },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
} satisfies Variants;

export const Skills = () => {
  return (
    <Section
      className="scroll-mt-20 relative overflow-hidden"
      id="technology"
    >
      <div className="relative z-10 flex flex-col items-start gap-8 md:gap-10 max-w-7xl mx-auto ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 max-w-3xl"
        >
          <Badge
            variant="outline"
            className="gap-2 py-1.5 px-4 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm hover:bg-primary/10 transition-colors"
          >
            <Puzzle className="w-3.5 h-3.5" />
            <span className="font-medium tracking-wider text-xs uppercase">Compétences</span>
          </Badge>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-caption">
              <span className="text-primary">J'aime travailler avec ces technologies</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Un éventail d'outils modernes et éprouvés que j'utilise pour concevoir
              des expériences web performantes et élégantes.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SKILLS_DATA.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/60 hover:border-primary/30 hover:bg-background/80 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/[0.07]"
            >
              {/* Subtle gradient overlay on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Icon Container */}
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/[0.08] group-hover:border-primary/20 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-300 shadow-inner">
                <skill.Logo size={40} />
              </div>

              {/* Skill Name */}
              <span className="relative z-10 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};