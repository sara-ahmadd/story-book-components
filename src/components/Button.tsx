import { ReactElement } from "react";

function Button({
  label,
  classes,
  handleClick,
  icon,
}: {
  label: string;
  classes: string;
  icon: ReactElement | undefined;
  handleClick: () => void;
}) {
  return (
    <button className={`${classes}`} onClick={handleClick}>
      <span>{label}</span>
      {icon ? icon : ""}
    </button>
  );
}

export default Button;
