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

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    id: 1,
    Logo: LandPlot,
    title: "Fleet management",
    probleme:
      "Managing a fleet manually is time-consuming and prone to errors. Important maintenance and insurance deadlines can easily be missed.",
    solution:
      "This application centralizes every aspect of fleet management in one place. It also sends automatic reminders to help companies stay organized and compliant.",
    resultat: "reduction of management times, visibility of consumption",
    technologies: "Laravel, React, MySQL, Tailwind CSS, GitHub",
    url: "/",
  },
  {
    id: 2,
    Logo: WebhookIcon,
    title: "API",
    probleme:
      "The application lacked proper access control for users. This increased security risks and allowed unnecessary access to resources.",
    solution:
      "A role-based authorization system was implemented using Symfony Security. User permissions are managed to ensure secure and controlled access to the API.",
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
