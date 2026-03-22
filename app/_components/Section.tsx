import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (
  props: PropsWithChildren<{ className?: string; id?: string }>,
) => {
  return (
    <section
      id={props.id}
      className={cn("max-w-5xl px-4 m-auto", props.className)}
    >
      {props.children}
    </section>
  );
};
