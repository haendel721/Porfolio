import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SideProjectProps = {
  id: number;
  Logo: LucideIcon;
  title: string;
  probleme: string;
  solution: string;
  resultat: string;
  technologies: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg text-accent-foreground font-semibold">
          {props.title}
        </p>
        <p className="text-primary">
          Problème :
          <span className="text-muted-foreground text-sm">
            {props.probleme}
          </span>
        </p>
        <p className="text-primary">
          Solution :
          <span className="text-muted-foreground text-sm">
            {props.solution}
          </span>
        </p>
        <p className="text-primary">
          Résultat :
          <span className="text-muted-foreground text-sm">
            {props.resultat}
          </span>
        </p>
        <p className="text-primary">
          Technologies :
          <span className="text-muted-foreground text-sm">
            {props.technologies}
          </span>
        </p>
      </div>
    </Link>
  );
};
export type { SideProjectProps };
