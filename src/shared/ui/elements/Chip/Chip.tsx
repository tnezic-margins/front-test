type ChipProps = {
  text: string;
};

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className="w-fit relative grid select-none items-center whitespace-nowrap rounded-lg bg-yellow-700 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
      <span className="">{text}</span>
    </div>
  );
};
