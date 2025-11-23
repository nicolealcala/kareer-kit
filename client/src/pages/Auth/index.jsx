import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";
function Auth() {
  const [activeTab, setActiveTab] = React.useState("login");
  return (
    <article className="flex items-center justify-center h-dvh w-full">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="p-6 border shadow-lg rounded-lg"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6 h-auto">
          <TabsTrigger
            value="login"
            className="data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            Signup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
      </Tabs>
    </article>
  );
}

export default Auth;
