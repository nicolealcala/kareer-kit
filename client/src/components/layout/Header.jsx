import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <nav className="sticky top-0 z-90 bg-background w-full p-6 pl-5 flex justify-between items-center h-16 shadow-sm">
      <SidebarTrigger className="size-10" />
      <h3 className="font-bold">KareerKit</h3>
      <div className="relative flex gap-x-3 items-center">
        <Button
          variant="ghost"
          className="absolute right-12 size-10 rounded-full"
        >
          <Bell className="text-foreground" />
        </Button>
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Header;
