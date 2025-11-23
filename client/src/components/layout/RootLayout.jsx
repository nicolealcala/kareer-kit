import React from "react";
import { SidebarProvider } from "../ui/sidebar.jsx";
import { Navigate, Outlet } from "react-router-dom";
import { AppSidebar } from "./Sidebar.jsx";
import Header from "./Header.jsx";
import { supabase } from "@/lib/config/supabaseClient.js";
import Loader from "../customized/Loader.jsx";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  const [loading, setLoading] = React.useState(true);
  const [session, setSession] = React.useState(null);

  React.useEffect(() => {
    async function fetchSession() {
      try {
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching session:", error);
        setSession(null);
        setLoading(false);
      }
    }

    fetchSession();
  });

  if (loading) return <Loader />;
  if (!session) return <Navigate to="/auth" replace />;

  return (
    <SidebarProvider className="flex w-full">
      <AppSidebar />
      <div className="flex flex-col items-center w-full h-dvh">
        <Header />
        <main className="max-w-7xl w-full h-full p-6 pl-5 py-6 z-0">
          <Outlet />
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
