import React from "react";
import cn from "classnames";

type Props = {
  text: string;
  onClick?: () => void;
  isTransparent?: boolean;
  radius?: string;
  classNames?: string;
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  isTransparent,
  radius = "rounded-lg",
  classNames,
}) => {
  return (
    <button
      className={cn(
        "outline-none focus:outline-none w-full my-8 btn-hover cool-transition h-1xl ",
        {
          "text-white bg-primary": !isTransparent,
          "bg-transparent": isTransparent === true,
        },
        radius,
        classNames
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
