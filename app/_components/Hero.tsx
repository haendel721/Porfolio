"use client"; // Obligatoire pour les animations côté client

import { easeInOut, motion } from "framer-motion";
import { Section } from "./Section";
import { Code } from "./Code";
import { Githubicone } from "./icons/Githubicon";
import { Linkdinicone } from "./icons/Linkdinicone";
import Link from "next/link";

export const Hero = () => {
  // Variantes pour le séquençage (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque élément enfant
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <Section
      className="scroll-mt-40 flex max-lg:flex-col items-start gap-10"
      id="home"
    >
      <motion.div
        className="flex-3 h-full flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="font-caption text-5xl text-primary font-bold"
        >
          RAINIMAMORISOA Abraham Haendel
        </motion.h2>

        <motion.h3
          variants={itemVariants}
          className="font-caption text-2xl text-muted-foreground"
        >
          Full-Stack Developer
        </motion.h3>

        <motion.p variants={itemVariants} className="max-w-xl">
          I am a web developer passionate about building modern applications,
          with a solid foundation in <Code>front-end</Code> and
          <Code>back-end</Code> technologies. Motivated and curious, I am always
          eager to improve my skills and take on new challenges.
        </motion.p>

        <motion.ul
          variants={itemVariants}
          className="flex items-center gap-4 py-2"
        >
          <li>
            <Link
              href="https://github.com/haendel721"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Githubicone size={30} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/..."
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Linkdinicone size={30} />
            </Link>
          </li>
        </motion.ul>
      </motion.div>

      {/* Animation de l'image : légère rotation et mise à l'échelle */}
      <motion.div
        className="flex-2"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
      >
        <img
          src="/images/me.png"
          className="w-full h-auto max-w-xs rounded-full mx-6 shadow-2xl border-2 border-primary/20"
          alt="Abraham Haendel"
        />
      </motion.div>
    </Section>
  );
};
