import {
  ChartPie,
  BriefcaseBusiness,
  FileText,
  CalendarSync,
  PencilRuler,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

// Menu items.
const defaultItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: ChartPie,
  },
  {
    title: "Applications",
    url: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: CalendarSync,
  },
];

const builderItems = [
  {
    title: "Resume",
    url: "/resume",
    icon: PencilRuler,
  },
  {
    title: "Cover Letter",
    url: "/cover-letter",
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {defaultItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      [
                        isActive ? "text-indigo-500!" : "text-slate-400!",
                        "inline-flex w-full gap-x-2 items-center py-1 px-1.5 rounded-md",
                      ].join(" ")
                    }
                  >
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Builder</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {builderItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      [
                        isActive ? "text-indigo-500!" : "text-slate-400!",
                        "inline-flex w-full gap-x-2 items-center py-1 px-1.5 rounded-md",
                      ].join(" ")
                    }
                  >
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <NavLink to="/builder" className="flex justify-center bg-primary">
              <span>Build with AI</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarContent>
      <SidebarFooter className="inline text-muted-foreground">
        From&nbsp;
        <a href="https://clinoae.is-a.dev" target="_blank">
          @clinoae
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
