import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type IndicatorArrowsProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const IndicatorArrows = ({
  isOpen,
  setIsOpen,
}: IndicatorArrowsProps) => {
  return isOpen ? (
    <ArrowLeftCircleIcon
      onClick={() => setIsOpen((prevState) => !prevState)}
      style={{
        position: "absolute",
        width: "1.7rem",
        right: 10,
        top: 20,
        cursor: "pointer",
      }}
    />
  ) : (
    <ArrowRightCircleIcon
      onClick={() => setIsOpen((prevState) => !prevState)}
      style={{
        position: "absolute",
        width: "1.7rem",
        right: 10,
        top: 20,
        cursor: "pointer",
      }}
    />
  );
};
