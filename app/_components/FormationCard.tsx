import { Card } from "@/components/ui/card";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export const FormationCard = (props: {
  image: string;
  institue: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <div>
        <img
          src={props.image}
          alt={props.institue}
          className="w-10 h-10 object-contain rounded-sm"
        />
        <div className="flex-1">
          {/* <p className="text-lg font-semibold">{props.institue}</p> */}
          <p className="text-muted-foreground text-xs">{props.date}</p>
        </div>
      </div>
      <div className="content-center flex-1">
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};
