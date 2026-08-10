"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export interface StageItem {
  id: string;
  company: string;
  role: string;
  date: string;
  type?: string;
  image: string;
  description: string;
  technologies?: string[];
}

export interface FormationItem {
  id: string;
  institution: string;
  degree: string;
  date: string;
  status?: string;
  image: string;
  description: string;
  skills?: string[];
}

const STAGES: StageItem[] = [
  {
    id: "stage-2",
    company: "DGSR",
    role: "Développeur Web Full-Stack",
    date: "Sept - Déc 2025",
    type: "Stage Full-Stack",
    image: "/images/logo_dgsr.png",
    description:
      "Conception et développement d'applications web modernes full-stack, intégration d'interfaces réactives et création d'APIs REST sécurisées.",
    technologies: ["React", "Symfony", "Laravel", "Tailwind CSS", "MySQL"],
  },
  {
    id: "stage-1",
    company: "DGSR",
    role: "Développeur Web Back-End",
    date: "Août - Nov 2024",
    type: "Stage Back-End",
    image: "/images/logo_dgsr.png",
    description:
      "Développement et optimisation des services back-end, modélisation de bases de données relationnelles et sécurisation des points d'accès API.",
    technologies: ["PHP", "Laravel", "MySQL", "Postman", "Git"],
  },
];

const FORMATIONS: FormationItem[] = [
  {
    id: "form-1",
    institution: "IS2M",
    degree: "Licence en Génie Logiciel",
    date: "2022 - 2025",
    status: "Diplôme d'État",
    image: "/images/is2m.png",
    description:
      "Formation approfondie en ingénierie logicielle, architecture des systèmes d'information, modélisation UML et bases de données avancées.",
    skills: ["Génie Logiciel", "Architecture Web", "Bases de Données", "UML"],
  },
  {
    id: "form-2",
    institution: "IESI",
    degree: "Formation JavaScript & Cybersécurité",
    date: "2023",
    status: "Certification",
    image: "/images/IESI.png",
    description:
      "Maîtrise du langage JavaScript moderne (ES6+) et apprentissage des bonnes pratiques de sécurité web et d'audit de code.",
    skills: ["JavaScript ES6+", "Sécurité Web", "Cybersécurité", "API Audit"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const About = () => {
  return (
    <Section className="scroll-mt-28 flex flex-col gap-10" id="about">
      {/* Header de la section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À propos de moi</span>
          </Badge>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-caption">
          <span className="text-primary">Mon parcours professionnel et académique</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          Découvrez mon parcours entre stages pratiques sur le terrain et formations spécialisées en génie logiciel et technologies web.
        </p>
      </div>

      {/* Grille principale 2 colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Colonne 1 : Stages & Expériences */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 pb-2 border-b border-border/50">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Expériences & Stages</h3>
              <p className="text-xs text-muted-foreground">Projets et réalisations en entreprise</p>
            </div>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-6">
            {STAGES.map((stage) => (
              <motion.div key={stage.id} variants={cardVariants} className="relative group">
                {/* Puce lumineuse timeline */}
                <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />

                <div className="bg-card/50 hover:bg-card/90 backdrop-blur-md border border-border/60 hover:border-primary/40 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden">
                  {/* Ligne d'accent supérieure au survol */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4">
                    {/* Logo entreprise */}
                    <div className="w-12 h-12 rounded-lg bg-background/80 p-2 border border-border/80 group-hover:border-primary/30 transition-colors flex items-center justify-center shrink-0">
                      <img
                        src={stage.image}
                        alt={stage.company}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {stage.role}
                        </h4>
                        {stage.type && (
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {stage.type}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 mb-2">
                        <span className="flex items-center gap-1 font-medium text-foreground/80">
                          <Building2 className="w-3.5 h-3.5 text-primary" />
                          {stage.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {stage.date}
                        </span>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Badges Techno */}
                      {stage.technologies && stage.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/30">
                          {stage.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Colonne 2 : Formations & Certifications */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 pb-2 border-b border-border/50">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Formations & Diplômes</h3>
              <p className="text-xs text-muted-foreground">Cursus académique et certifications</p>
            </div>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-6">
            {FORMATIONS.map((formation) => (
              <motion.div key={formation.id} variants={cardVariants} className="relative group">
                {/* Puce lumineuse timeline */}
                <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />

                <div className="bg-card/50 hover:bg-card/90 backdrop-blur-md border border-border/60 hover:border-primary/40 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden">
                  {/* Ligne d'accent supérieure au survol */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4">
                    {/* Logo école */}
                    <div className="w-12 h-12 rounded-lg bg-background/80 p-2 border border-border/80 group-hover:border-primary/30 transition-colors flex items-center justify-center shrink-0">
                      <img
                        src={formation.image}
                        alt={formation.institution}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {formation.degree}
                        </h4>
                        {formation.status && (
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-secondary/80 text-secondary-foreground border border-secondary">
                            {formation.status}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 mb-2">
                        <span className="flex items-center gap-1 font-medium text-foreground/80">
                          <Building2 className="w-3.5 h-3.5 text-primary" />
                          {formation.institution}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formation.date}
                        </span>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {formation.description}
                      </p>

                      {/* Compétences acquises */}
                      {formation.skills && formation.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/30">
                          {formation.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
