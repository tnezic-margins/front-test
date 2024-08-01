import { Chip } from "shared/ui";

type ChipListProps<T> = {
  items: T[];
  listItemType?: "chip" | "text";
};

export const DataList = <T,>({
  items,
  listItemType = "chip",
}: ChipListProps<T>) => {
  return (
    <div className="flex flex-row gap-1 flex-wrap">
      {items.map((item) => {
        if (listItemType === "text") {
          return <p>{item as string}</p>;
        }

        return <Chip text={item as string} />;
      })}
    </div>
  );
};
