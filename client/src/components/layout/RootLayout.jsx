// layouts/RootLayout.jsx
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar.jsx";
import { Outlet, NavLink } from "react-router-dom";
import { AppSidebar } from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function RootLayout() {
  return (
    <SidebarProvider className="flex w-full">
      <AppSidebar />
      <div className="w-full h-dvh">
        <Header />
        <main className=" w-full h-full py-6 px-4 z-0">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
