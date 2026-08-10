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
      {/* COLONNE DROITE : STAGES */}
      <motion.div
        className="flex-2 w-full flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Internship */}
        <Card className="w-full p-3 flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Stages</p>
          <div className="flex flex-col gap-4">
            {STAGE.map((stage, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Stage {...stage} />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
      {/* COLONNE DROITE : FORMATIONS */}
      <motion.div
        className="flex-2 w-full flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Training */}
        <Card className="p-3 gap-2">
          <p className="text-muted-foreground text-lg">Formations</p>
          <div className="flex flex-col gap-2">
            <motion.div variants={itemVariants}>
              <FormationCard
                institue="IS2M"
                image="images/is2m.png"
                date="2022-2025"
                description="Licence en Génie Logiciel"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FormationCard
                institue="IESI"
                image="images/IESI.png"
                date="2023-2023"
                description="Formation JavaScript et cybersécurité"
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
    title: "Gestion de flotte",
    probleme:
      "La gestion manuelle d'une flotte automobile prend du temps et est sujette aux erreurs. Les échéances importantes d'entretien et d'assurance peuvent facilement être manquées.",
    solution:
      "Cette application centralise chaque aspect de la gestion de flotte en un seul endroit. Elle envoie également des rappels automatiques pour aider les entreprises à rester organisées et conformes.",
    resultat: "Réduction des temps de gestion, visibilité accrue sur la consommation",
    technologies: "Laravel, React, MySQL, Tailwind CSS, GitHub",
    url: "/",
  },
  {
    id: 2,
    Logo: WebhookIcon,
    title: "API",
    probleme:
      "L'application manquait d'un contrôle d'accès approprié pour les utilisateurs. Cela augmentait les risques de sécurité et permettait des accès non autorisés aux ressources.",
    solution:
      "Un système d'autorisation basé sur les rôles a été mis en œuvre avec Symfony Security. Les permissions des utilisateurs sont gérées pour garantir un accès sécurisé et contrôlé à l'API.",
    resultat: "Amélioration des performances et réduction de la charge serveur.",
    technologies: "Symfony, Bootstrap, MySQL, GitHub, Postman",
    url: "/",
  },
];

const STAGE: StageProps[] = [
  {
    image: "images/logo_dgsr.png",
    title: "DGSR",
    role: "Développeur Web Back-End",
    date: "Août - Nov 2024",
    url: "/",
    freelance: true,
  },
  {
    image: "images/logo_dgsr.png",
    title: "DGSR",
    role: "Développeur Web Full-Stack",
    date: "Sept - Déc 2025",
    url: "/",
  },
];
