"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { childVariants } from "./projectVariants";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
  onImageClick: (index: number) => void;
}

export function ProjectGallery({
  images,
  projectTitle,
  onImageClick,
}: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <motion.div variants={childVariants}>
      <div className="flex flex-wrap gap-2.5 my-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group rounded-md overflow-hidden border border-border cursor-pointer shadow-xs hover:border-primary/60 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(i);
            }}
          >
            <img
              src={img}
              alt={`${projectTitle} screenshot ${i + 1}`}
              className="w-40 h-28 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <ZoomIn className="w-6 h-6 drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
