type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return <label className="text-[0.85rem] text-gray-200 font-bold uppercase">{text}</label>;
};
