// layouts/RootLayout.jsx
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar.jsx";
import { Outlet, NavLink } from "react-router-dom";
import { AppSidebar } from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function RootLayout() {
  return (
    <SidebarProvider className="flex w-full">
      <AppSidebar />
      <div className="flex flex-col items-center w-full h-dvh">
        <Header />
        <main className="max-w-7xl w-full h-full px-4 py-6 z-0">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
