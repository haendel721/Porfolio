"use client";
import React from "react";
import { useState } from "react";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { About } from "./_components/About";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { MessageCircleDashed, MessageCircle, Mail } from "lucide-react";
import { ProjectCards } from "./_components/ProjectVue";
import { SIDE_PROJECTS } from "./_components/Status";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <About />
      <Spacing size="sm" />
      <ProjectCards projects={SIDE_PROJECTS} />
      <Spacing size="sm" />
      <Skills />
      <Spacing size="sm" />
      <Contact />
      <Spacing size="sm" />
      <Footer />
      {/* {open && (
        <div className="flex flex-col gap-3 animate-fadeIn">
          <button className="bubble-item">
            <MessageCircle />
          </button>

          <button className="bubble-item">
            <Mail />
          </button>

          <button className="bubble-item">
            <MessageCircleDashed />
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-primary text-white p-4 fixed bottom-4 right-4 shadow-lg hover:bg-primary/80 transition-colors"
      >
        <MessageCircleDashed />
      </button> */}
    </main>
  );
}
