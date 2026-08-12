import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

type ContactItem = {
    id: string;
    name: string;
    value: string;
    href: string;
    icon: LucideIcon | IconType;
    avatar?: string; // photo de profil optionnelle pour le petit rond
    ariaLabel: string;
};

// Tableau de données : modifiable facilement pour ajouter/retirer un canal
const contacts: ContactItem[] = [
    {
        id: "whatsapp",
        name: "WhatsApp",
        value: "+261 33 85 339 29",
        href: "https://wa.me/261338533929",
        icon: FaWhatsapp,
        avatar: "/images/profil.png",
        ariaLabel: "Contacter par WhatsApp au +261 33 85 339 29 (ouvre un nouvel onglet)",
    },
    {
        id: "gmail",
        name: "Gmail",
        value: "rainimamorisoaa@gmail.com",
        href: "mailto:rainimamorisoaa@gmail.com",
        icon: Mail,
        avatar: "/images/profil.png",
        ariaLabel: "Envoyer un email à rainimamorisoaa@gmail.com",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        value: "linkedin.com/in/rainimamorisoa",
        href: "https://www.linkedin.com/in/rainimamorisoa-abraham-haendel-1a36933a6/",
        icon: FaLinkedinIn,
        avatar: "/images/profil.png",
        ariaLabel: "Voir le profil LinkedIn linkedin.com/in/monprofil (ouvre un nouvel onglet)",
    },
    {
        id: "facebook",
        name: "Facebook",
        value: "Bram haendel",
        href: "https://www.facebook.com/abraham.haendel",
        icon: FaFacebookF,
        avatar: "/images/pdpfb.jpg",
        ariaLabel: "Voir le profil Facebook facebook.com/abraham.haendel (ouvre un nouvel onglet)",
    },
];

export const ContactMe = () => {
    return (
        <section
            aria-labelledby="contact-heading"
            className="scroll-mt-20 w-full bg-black px-4 sm:px-8"
            id="contact"
        >
            <div className="mx-auto max-w-5xl text-center">
                <Badge variant="outline" className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/10 text-primary mb-3">Me contacter</Badge>
                <h2
                    id="contact-heading"
                    className="text-3xl font-semibold text-neutral-100 sm:text-4xl"
                >
                    Restons en contact
                </h2>
                <p className="mt-3 text-sm text-slate-400 sm:text-base">
                    Retrouvez-moi sur mes différents canaux
                </p>

                {/* Ligne décorative avec point teal */}
                <div className="mt-6 flex items-center justify-center gap-3" aria-hidden="true">
                    <span className="h-px w-16 bg-[#1b2a2a]" />
                    <span className="h-2 w-2 rounded-full bg-[#4e9795] shadow-[0_0_8px_#4e9795]" />
                    <span className="h-px w-16 bg-[#1b2a2a]" />
                </div>

                <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {contacts.map((contact) => {
                        const Icon = contact.icon;
                        return (
                            <li key={contact.id}>
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contact.ariaLabel}
                                    className="group relative flex h-full flex-col items-center rounded-2xl border border-[#1b2a2a] bg-[#080d0d] px-6 pb-7 pt-10 text-center shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4e9795]/60 hover:shadow-[0_14px_34px_-12px_rgba(78,151,149,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4e9795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050909]"
                                >
                                    {/* Icône flèche externe discrète, coin supérieur droit */}
                                    <ExternalLink
                                        size={14}
                                        aria-hidden="true"
                                        className="absolute right-4 top-4 text-slate-600 transition-colors duration-300 group-hover:text-[#4e9795]"
                                    />

                                    {/* Badge en forme de "pin" : contour lumineux teal */}
                                    <div className="relative mb-6 h-16 w-16">
                                        {/* Forme du pin : bordure teal, fond sombre, léger glow */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-[#4e9795] bg-[#0b1212]/60  transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(78,151,149,0.45)]"
                                        />

                                        {/* Icône centrée dans le pin */}
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <Icon
                                                size={22}
                                                aria-hidden="true"
                                                className="text-[#4e9795] transition-colors duration-300 group-hover:text-[#6fc2bf]"
                                            />
                                        </span>

                                        {/* Petit rond superposé en bas à gauche : accueille la photo de profil */}
                                        <span className="absolute -bottom-1 -left-4 flex h-10 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-[#080d0d] bg-[#0b1212] ring-1 ring-[#4e9795]/70 transition-all duration-300 ">
                                            {contact.avatar ? (
                                                <Image
                                                    src={contact.avatar}
                                                    alt=""
                                                    fill
                                                    sizes="20px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <span className="h-2 w-2 rounded-full bg-[#4e9795]" />
                                            )}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-semibold text-neutral-50">
                                        {contact.name}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-slate-400">
                                        {contact.value}
                                    </p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section >
    );
};