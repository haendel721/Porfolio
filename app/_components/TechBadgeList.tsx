"use client";

import { motion } from "framer-motion";
import { getTechLogo } from "./techIcons";
import { childVariants, pillVariants } from "./projectVariants";

interface TechBadgeListProps {
  technologies: string;
}

export function TechBadgeList({ technologies }: TechBadgeListProps) {
  const techList = typeof technologies === "string"
    ? technologies.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  if (techList.length === 0) return null;

  return (
    <motion.div
      className="flex flex-wrap items-center gap-1.5 mb-3"
      variants={childVariants}
    >
      {techList.map((tech, index) => {
        const SkillLogo = getTechLogo(tech);

        return (
          <motion.span
            key={index}
            variants={pillVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-primary/50 text-muted-foreground/80 rounded-full border border-border/50 shadow-xs transition-colors hover:bg-secondary/80"
          >
            {SkillLogo && (
              <SkillLogo size={14} className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>{tech}</span>
          </motion.span>
        );
      })}
    </motion.div>
  );
}
