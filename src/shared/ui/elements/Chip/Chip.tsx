type ChipProps = {
  text: string;
  isActive?: boolean;
  onClick?: (id: number, text: string) => void;
  id?: number;
};

export const Chip = ({ id, text, onClick, isActive }: ChipProps) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick?.(id as number, text);
        }
      }}
      className={`w-fit relative grid select-none items-center whitespace-nowrap rounded-lg  py-1.5 px-3 font-sans text-xs font-bold uppercase text-white ${
        isActive ? "bg-yellow-600" : "bg-yellow-700"
      }`}
    >
      <span className="">{text}</span>
    </div>
  );
};
