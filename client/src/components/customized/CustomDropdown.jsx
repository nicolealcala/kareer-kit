import { cn } from "@/lib/utils/tailwind";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

function CustomDropdown({ items, trigger, align, ...props }) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        className="rounded-full size-8! p-1.5 cursor-pointer"
        asChild
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.label}
            className={cn(item.color ?? "", "items-center")}
          >
            {item.icon} <span className="font-medium">{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomDropdown;
