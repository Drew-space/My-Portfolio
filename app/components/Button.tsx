import React from "react";

interface ButtonOutlineProps {
  label: string;
  icon?: React.ReactNode;
  classes?: string;
  href?: string;
  target?: "_self" | "_blank";
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  label,
  icon,
  classes = "",
}) => {
  return (
    <button
      className={`btn btn-outline flex items-center rounded-2xl px-4 py-3 ring-inset ring-2 ring-zinc-50/10 backdrop-blur-2xl hover:bg-zinc-50/15 ${classes}`}
    >
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default ButtonOutline;
