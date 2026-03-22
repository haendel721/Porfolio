import { Card } from "@/components/ui/card";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  url?: string;
}) => {
  return (
    <Link href={props.url ?? "#"} className="block w-full">
      <Card className="w-full  bg-accent/10 flex items-center justify-between  hover:bg-accent/30 transition-colors group">
        <div className="flex items-center gap-10">
          <div className="relative">
            <img
              src={props.image}
              alt={props.name}
              className="w-10 h-10 rounded-full"
            />
            <img
              src={props.mediumImage}
              alt={props.name}
              className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full"
            />
          </div>
          <p className="text-lg font-semibold py-2">{props.name}</p>
          <ArrowUpLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </Card>
    </Link>
  );
};
