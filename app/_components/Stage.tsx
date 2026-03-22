import Link from "next/link";
import { Badge } from "@/components/ui/badge";
type StageProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const Stage = (props: StageProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-sm"
      />
      <div className="mr-auto">
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-muted-foreground text-xs">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-muted-foreground text-xs">{props.date}</p>
      </div>
    </Link>
  );
};

export type { StageProps };
