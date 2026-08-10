"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon, MapPin } from "lucide-react";
import { useState } from "react";
import { getProjectData } from "./project_image/AllImage";
import { ImageModal } from "./ImageModal";
import { TechBadgeList } from "./TechBadgeList";
import { ProjectGallery } from "./ProjectGallery";
import {
  cardVariants,
  logoVariants,
  childVariants,
  expandedContentVariants,
  chevronVariants,
} from "./projectVariants";

export interface SideProjectProps {
  id: number;
  Logo: LucideIcon;
  title: string;
  probleme: string;
  solution: string;
  resultat: string;
  technologies: string;
  url: string;
  image?: string;
  images?: string[];
}

export function ProjectCard({ project }: { project: SideProjectProps }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Récupération des données d'images du projet
  const projectData = getProjectData(project.title);
  const projectImage = project.image || projectData?.image;
  const allImages =
    project.images || projectData?.images || (projectImage ? [projectImage] : []);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="border-b border-border/50 py-2 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          {/* Logo */}
          <motion.div variants={logoVariants} whileHover="hover">
            {project.Logo && (
              <project.Logo className="w-12 h-12 text-gray-700 flex-shrink-0" />
            )}
          </motion.div>

          {/* Détails du projet */}
          <div className="flex-1 min-w-0">
            {/* Titre */}
            <motion.div
              className="flex items-center gap-3 mb-1"
              variants={childVariants}
            >
              <h3 className="font-semibold text-primary text-base">
                {project.title}
              </h3>
            </motion.div>

            {/* Résultat */}
            <motion.p
              className="text-gray-600 text-sm mb-3 font-medium"
              variants={childVariants}
            >
              {project.resultat}
            </motion.p>

            {/* Badges de Technologies */}
            <TechBadgeList technologies={project.technologies} />

            {/* Contenu pliable */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={expandedContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-hidden"
                >
                  {/* Problème & Solution */}
                  <motion.div
                    className="text-gray-600 text-sm leading-relaxed mb-4 flex flex-col gap-2 hover:bg-accent/10 p-3 rounded-lg border border-border/30"
                    variants={childVariants}
                  >
                    <p>
                      <strong className="text-muted-foreground font-semibold">
                        Problème :{" "}
                      </strong>
                      {project.probleme}
                    </p>
                    <p>
                      <strong className="text-muted-foreground font-semibold">
                        Solution :{" "}
                      </strong>
                      {project.solution}
                    </p>
                  </motion.div>

                  {/* Galerie de captures d'écran */}
                  <ProjectGallery
                    images={allImages}
                    projectTitle={project.title}
                    onImageClick={(index) => setActiveImageIndex(index)}
                  />

                  {/* Localisation / Titre */}
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-500"
                    variants={childVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <MapPin className="w-4 h-4" />
                    </motion.div>
                    <span className="text-xs font-medium">{project.title}</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bouton Chevron */}
        <motion.button
          variants={chevronVariants}
          whileTap="tap"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground/80 flex-shrink-0 ml-3 shadow-sm hover:text-primary hover:bg-secondary/50"
          style={{ backgroundColor: "#272D41" }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Modal Lightbox */}
      <ImageModal
        isOpen={activeImageIndex !== null}
        images={allImages}
        currentIndex={activeImageIndex ?? 0}
        projectTitle={project.title}
        onClose={() => setActiveImageIndex(null)}
        onNavigate={(index) => setActiveImageIndex(index)}
      />
    </motion.div>
  );
}
