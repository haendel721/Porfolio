import { ComponentPropsWithoutRef } from "react";

export const PostmanLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const size = props.size || 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <circle cx="128" cy="128" r="128" fill="#FF6C37" />
        <path
          d="M185.5 86.5l-33.8 33.8 12.5 50.1c1.2 4.7-2.5 9-7.2 8.5l-49.2-5.8-33.8 33.8c-3.3 3.3-8.7 3.3-12.1 0l-17.1-17.1c-3.3-3.3-3.3-8.7 0-12.1l33.8-33.8-5.8-49.2c-.5-4.7 3.8-8.4 8.5-7.2l50.1 12.5 33.8-33.8c3.3-3.3 8.7-3.3 12.1 0l17.1 17.1c3.4 3.3 3.4 8.7.3 12.2z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};
