"use client";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps } from "./SideProject";
import { Stage, StageProps } from "./Stage";
import {
  ArrowUpLeft,
  Code,
  LandPlot,
  LucideIcon,
  Rss,
  StickyNote,
  Webhook,
  WebhookIcon,
} from "lucide-react";
import { FormationCard } from "./FormationCard";
import { motion } from "framer-motion";

// 1. Définition des variantes pour la réutilisation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre chaque projet/stage
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Status = () => {
  return (
    <Section
      className="scroll-mt-30 flex max-lg:flex-col items-start gap-4"
      id="information"
    >
      {/* COLONNE GAUCHE : PROJETS */}
      <motion.div
        className="flex-3 w-full"
        initial="hidden"
        whileInView="visible" // S'anime quand devient visible au scroll
        viewport={{ once: true, margin: "-100px" }} // S'exécute une seule fois
        variants={containerVariants}
      >
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SideProject {...project} url="/" />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* COLONNE DROITE : STAGES & FORMATIONS */}
      <motion.div
        className="flex-2 w-full flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Internship */}
        <Card className="w-full p-3 flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Internships</p>
          <div className="flex flex-col gap-4">
            {STAGE.map((stage, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Stage {...stage} />
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Section Training */}
        <Card className="p-3 gap-2">
          <p className="text-muted-foreground text-lg">Training</p>
          <div className="flex flex-col gap-2">
            <motion.div variants={itemVariants}>
              <FormationCard
                institue="IS2M"
                image="images/is2m.png"
                date="2022-2025"
                description="Bachelor’s degree in Software Engineering"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FormationCard
                institue="IESI"
                image="images/IESI.png"
                date="2023-2023"
                description="Training on JavaScript and cybersecurity"
              />
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: LandPlot,
    title: "Fleet management",
    probleme: "Manual tracking lacks visibility.",
    solution: "web application",
    resultat: "reduction of management times, visibility of consumption",
    technologies: "Laravel, React, MySQL, Tailwind CSS, GitHub",
    url: "/",
  },
  {
    Logo: WebhookIcon,
    title: "API",
    probleme:
      "Lack of control over site access, unnecessary consumption of network resources, and security risks.",
    solution: "develop a user-based authorization system and role management",
    resultat: "Improved performance and reduced server load.",
    technologies: "Symfony, bootstrap, MySQL, GitHub, Postman",
    url: "/",
  },
];

const STAGE: StageProps[] = [
  {
    image: "images/logo_dgsr.png",
    title: "DGSR",
    role: "back-end web developer",
    date: "August - Nov 2024",
    url: "/",
    freelance: true,
  },
  {
    image: "images/logo_dgsr.png",
    title: "DGSR",
    role: "full-stack web developer",
    date: "Sept - Dec 2025",
    url: "/",
  },
];
