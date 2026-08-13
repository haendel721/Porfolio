"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ProjectCard, SideProjectProps } from "./ProjectCard";
import { FolderKanban } from "lucide-react";

export type { SideProjectProps };

interface ProjectCardsProps {
  projects: SideProjectProps[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <Section>
      <div className="flex items-center gap-2 py-5">
        <Badge variant="outline" className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/10 text-primary">
          <FolderKanban className="w-3.5 h-3.5" />
          Projets
        </Badge>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-caption">
        <span className="text-primary">Quelques projets marquants</span>
      </h2>

      <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
        Chaque projet reflète une problématique concrète, les technologies utilisées et les compétences acquises au cours de son développement.
      </p>
      <div className="max-w-4xl mx-auto py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1 + 0.3,
                mass: 0.8,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
