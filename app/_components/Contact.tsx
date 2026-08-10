"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4" id="contact">
      {/* Animation du Badge et du Titre */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Badge>Contact</Badge>
      </motion.div>

      <motion.h2
        className="pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Je serais ravi de travailler avec vous
      </motion.h2>

      <div className="flex max-md:flex-col w-full gap-4">
        {/* Carte Email */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }} // Effet de zoom discret au survol
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactCard
            url="mailto:rainimamorisoaa@gmail.com"
            name="rainimamorisoaa@gmail.com"
            image="/images/me.png"
            mediumImage="https://static.vecteezy.com/system/resources/previews/022/613/021/original/google-mail-gmail-icon-logo-symbol-free-png.png"
          />
        </motion.div>

        {/* Carte WhatsApp */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactCard
            url="https://wa.me/261338533929"
            name="+261 33 85 339 29"
            image="/images/me.png"
            mediumImage="https://static.vecteezy.com/system/resources/previews/045/602/356/large_2x/whatsapp-icon-logo-transparent-background-free-png.png"
          />
        </motion.div>
      </div>
    </Section>
  );
};
