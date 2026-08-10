"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ProjectCard, SideProjectProps } from "./ProjectCard";

export type { SideProjectProps };

interface ProjectCardsProps {
  projects: SideProjectProps[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <Section>
      <Badge>Projects</Badge>
      <div className="max-w-4xl mx-auto p-6">
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
