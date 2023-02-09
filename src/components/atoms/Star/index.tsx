import { FaStar } from "react-icons/fa";
import { MouseEventHandler } from "react";

export const Star = ({
  selected = false,
  onClick,
}: {
  selected: boolean;
  onClick: MouseEventHandler<SVGElement>;
}) => {
  return (
    <FaStar
      data-testid="star-icon"
      className={selected ? "text-yellow" : "text-dwhite"}
      onClick={onClick}
    />
  );
};
