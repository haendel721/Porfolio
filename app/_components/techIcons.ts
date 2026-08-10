import { Code } from "lucide-react";
import { SKILLS_DATA } from "./Skills";

// Imports des icônes de technologies
import { ReactLogo } from "./icons/ReactLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { NextLogo } from "./icons/NextLogo";
import { SymfonyLogo } from "./icons/SymfonyLogo";
import { HtmlLogo } from "./icons/HtmlLogo";
import { CssLogo } from "./icons/CssLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { MySqlLogo } from "./icons/MySqlLogo";
import { OracleLogo } from "./icons/OracleLogo";
import { BootstrapLogo } from "./icons/BootstrapLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { JavaLogo } from "./icons/JavaLogo";
import { Githubicone } from "./icons/Githubicon";
import { GitLogo } from "./icons/GitLogo";
import { PostmanLogo } from "./icons/PostmanLogo";
import { OpenAiLogo } from "./icons/OpenAiLogo";
import { Linkdinicone } from "./icons/Linkdinicone";

// Dictionnaire de correspondance des technologies vers leurs icônes SVG
export const TECH_ICON_MAP: Record<string, any> = {
  react: ReactLogo,
  laravel: LaravelLogo,
  next: NextLogo,
  "next.js": NextLogo,
  nextjs: NextLogo,
  symfony: SymfonyLogo,
  html: HtmlLogo,
  html5: HtmlLogo,
  css: CssLogo,
  css3: CssLogo,
  php: PhpLogo,
  javascript: JavascriptLogo,
  js: JavascriptLogo,
  mysql: MySqlLogo,
  oracle: OracleLogo,
  bootstrap: BootstrapLogo,
  tailwind: TailwindLogo,
  tailwindcss: TailwindLogo,
  "tailwind css": TailwindLogo,
  java: JavaLogo,
  github: Githubicone,
  git: GitLogo,
  postman: PostmanLogo,
  openai: OpenAiLogo,
  linkedin: Linkdinicone,
};

/**
 * Retourne le composant Logo correspondant au nom de la technologie
 */
export function getTechLogo(techName: string) {
  const clean = techName.trim().toLowerCase();

  // 1. Correspondance exacte
  if (TECH_ICON_MAP[clean]) {
    return TECH_ICON_MAP[clean];
  }

  // 2. Correspondance partielle
  for (const [key, logo] of Object.entries(TECH_ICON_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return logo;
    }
  }

  // 3. Fallback dans SKILLS_DATA
  const skill = SKILLS_DATA.find(
    (s) =>
      clean.includes(s.name.toLowerCase()) ||
      s.name.toLowerCase().includes(clean)
  );
  if (skill?.Logo) {
    return skill.Logo;
  }

  // 4. Icône Lucide par défaut
  return Code;
}
