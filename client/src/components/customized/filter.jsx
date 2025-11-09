import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils/tailwind";

const Filter = ({
  items = [],
  triggerClassName,
  contentClassName,
  placeholder = "Filter",
  ...props
}) => {
  return (
    <Select {...props}>
      <SelectTrigger
        className={cn(
          triggerClassName,
          props.value ||
            (props.defaultValue && "bg-indigo-500! text-background")
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
};

export default Filter;
