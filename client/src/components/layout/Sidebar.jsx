import {
  ChartPie,
  BriefcaseBusiness,
  FileText,
  CalendarClock,
  PencilRuler,
  ChevronsUpDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { NavLink } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";

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
    icon: CalendarClock,
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
      <CustomSidebarHeader />
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
      </SidebarContent>
      <SidebarFooter className="px-6 inline text-muted-foreground">
        from&nbsp;
        <a href="https://clinoae.is-a.dev" target="_blank">
          @clinoae
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}

function CustomSidebarHeader() {
  const periods = [
    { year: "2025", organization: { img: "", name: "" } },
    {
      year: "2024",
      organization: {
        img: "https://lh3.googleusercontent.com/IgRKLuNUXam-9GZOCWXTmIN_WXJS86BrE0RdvBdcy9dL-omOL4lDpETzMtN38QgF84fnjn5Ruy3TjgHbyvo=s280",
        name: "WPH Digital Pte Ltd",
      },
    },
    { year: "2023", organization: { img: "", name: "" } },
    { year: "2022", organization: { img: "", name: "" } },
  ];
  const [period, setPeriod] = useState(periods[0]);

  return (
    <SidebarHeader className="p-0">
      <SidebarMenu>
        <SidebarMenuItem>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger
              className="w-full h-max! rounded-none!"
              arrow={<ChevronsUpDown size={16} />}
            >
              <div className="flex gap-x-4">
                <img
                  src={
                    period.organization.img ||
                    "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                  }
                  alt="Organization Image"
                  className="size-10 object-contain rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm">
                    {period.organization.name || "Unemployed"}
                  </span>
                  <span className="text-xs">{period.year}</span>
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="w-[90%]">
              {periods.map((p) => (
                <SelectItem key={p.year} value={p} className="max-w-[90%]">
                  {p.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
