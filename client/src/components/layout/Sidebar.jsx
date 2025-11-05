// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="p-4 bg-gray-100 flex gap-4">
//       <NavLink to="/">Dashboard</NavLink>
//       <NavLink to="/cover-letter">Cover Letter</NavLink>
//       <NavLink to="/reminders">Reminders</NavLink>
//       <NavLink to="/applications">Applications</NavLink>
//     </nav>
//   );
// };

// export default Navbar;

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarHeader,
// } from "@/components/ui/sidebar";
// import { BriefcaseBusiness, CalendarSync, ChartPie } from "lucide-react";

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
            <SidebarMenu>
              {defaultItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
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
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
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
