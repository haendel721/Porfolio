import { ComponentPropsWithoutRef } from "react";

export const GitLogo = (
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
        <path
          d="M249.2 115.8L140.2 6.8c-9.1-9.1-23.8-9.1-32.9 0L6.8 115.8c-9.1 9.1-9.1 23.8 0 32.9l109 109c9.1 9.1 23.8 9.1 32.9 0l100.5-100.5c9.1-9.1 9.1-23.8 0-32.9z"
          fill="#F05032"
        />
        <path
          d="M174.1 125.7c-3.8-3.8-9.8-4.4-14.3-1.6l-21.5-21.5v-18c5.4-2.8 9.1-8.5 9.1-15 0-9.4-7.6-17.1-17.1-17.1s-17.1 7.6-17.1 17.1c0 6.5 3.7 12.2 9.1 15v47.9c-5.4 2.8-9.1 8.5-9.1 15 0 6.6 3.7 12.3 9.1 15.1v17.5c-5.4 2.8-9.1 8.5-9.1 15 0 9.4 7.6 17.1 17.1 17.1s17.1-7.6 17.1-17.1c0-6.6-3.7-12.3-9.1-15.1v-17.3l21.2-21.2c2.8 2.3 6.9 2.1 9.7-.7 3.7-3.7 3.7-9.8 0-13.6z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};
