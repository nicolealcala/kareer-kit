import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import DropdownAvatar from "./DropdownAvatar";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background w-full p-6 pl-5 flex justify-between items-center h-16 shadow-sm">
      <SidebarTrigger className="size-10" />
      <h3 className="font-bold">KareerKit</h3>
      <div className="relative flex gap-x-3 items-center">
        <Button
          variant="ghost"
          className="absolute right-12 size-10 rounded-full"
        >
          <Bell className="text-foreground" />
        </Button>
        <DropdownAvatar />
      </div>
    </nav>
  );
};

export default Header;
