import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils/tailwind";
import { applicationStatuses } from "@/lib/mock-data/applications";

export default function CustomSelect({
  items = [],
  triggerClassName,
  contentClassName,
  type,
  placeholder = "Filter",
  arrow,
  ...props
}) {
  const [selectedItem, setSelectedItem] = React.useState(props.value || null);

  React.useEffect(() => console.log("Item:", selectedItem), [selectedItem]);
  return (
    <Select {...props} value={selectedItem} onValueChange={setSelectedItem}>
      <SelectTrigger
        arrow={arrow}
        className={cn(
          triggerClassName,
          type === "filter" &&
            (props.value || props.defaultValue) &&
            "bg-indigo-500! text-background",
          !type &&
            applicationStatuses.find((item) => item.value === selectedItem)
              ?.color
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {items?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
