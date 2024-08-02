import { ComponentProps } from "react";
import { DataList } from "../DataList/DataList";
import { Label } from "../Label/Label";

type DataGroupProps<T> = {
  labelText: string;
  items: T[];
  listItemType?: "chip" | "text";
  direction?: "flex-col" | "flex-row";
  gap?: string;
  className?: ComponentProps<"div">["className"];
};

export const DataGroup = <T,>({
  labelText,
  items,
  listItemType = "chip",
  direction = "flex-col",
  gap = "gap-1",
  className,
}: DataGroupProps<T>) => {
  return (
    <div className={`flex ${gap} ${direction} ${className}`}>
      <Label text={labelText} />

      <DataList items={items} listItemType={listItemType} />
    </div>
  );
};
