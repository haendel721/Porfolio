export interface ImagesProjectProps {
  title: string;
  image: string;
  images?: string[];
}

export const IMAGES_PROJECTS: ImagesProjectProps[] = [
  {
    title: "Gestion de flotte",
    image: "/images/parc-auto/flot1.png",
    images: [
      "/images/parc-auto/flot1.png",
      "/images/parc-auto/flot2.png",
      "/images/parc-auto/flot3.png",
      // "/images/parc-auto/flot4.png",
      // "/images/parc-auto/flot5.png",
      "/images/parc-auto/flot6.png",
      "/images/parc-auto/flot7.png",
      "/images/parc-auto/flot8.png",
      "/images/parc-auto/flot9.png",
      // "/images/parc-auto/flot10.png",
      "/images/parc-auto/flot11.png",
      // "/images/parc-auto/flot12.png",
    ],
  },
  {
    title: "API",
    image: "/images/API/API1.png",
    images: [
      "/images/API/API1.png",
      "/images/API/API2.png",
      "/images/API/API3.png",
      "/images/API/API4.png",
      "/images/API/API5.png",
      "/images/API/API6.png",
    ],
  },
];

/**
 * Fonction de recherche pour récupérer l'image principale d'un projet selon son titre
 */
export function getProjectImage(title: string): string | undefined {
  const match = getProjectData(title);
  return match?.image;
}

/**
 * Fonction de recherche pour récupérer les données complètes d'images d'un projet selon son titre
 */
export function getProjectData(title: string): ImagesProjectProps | undefined {
  const cleanTitle = title.trim().toLowerCase();
  return IMAGES_PROJECTS.find(
    (item) => item.title.trim().toLowerCase() === cleanTitle
  );
}
