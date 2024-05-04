import { ReactNode } from "react";

function SvgIcon({
  width,
  height,
  children,
}: {
  width: number | string;
  height: number | string;
  children: ReactNode;
}) {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export default SvgIcon;
