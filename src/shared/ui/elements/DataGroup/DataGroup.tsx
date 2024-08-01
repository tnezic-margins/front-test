import { DataList } from "../DataList/DataList";
import { Label } from "../Label/Label";

type DataGroupProps<T> = {
  labelText: string;
  items: T[];
  listItemType?: "chip" | "text";
  direction?: "flex-col" | "flex-row";
  gap?: string;
};

export const DataGroup = <T,>({
  labelText,
  items,
  listItemType = "chip",
  direction = "flex-col",
  gap = "gap-1",
}: DataGroupProps<T>) => {
  return (
    <div className={`flex ${gap} ${direction}`}>
      <Label text={labelText} />

      <DataList items={items} listItemType={listItemType} />
    </div>
  );
};
