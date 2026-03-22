import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn("bg-accent/30 font-mono rounded-sm p-1 m-1", className)}
      {...props}
    />
  );
};
