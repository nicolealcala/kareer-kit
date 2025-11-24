import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";
function Auth() {
  const [activeTab, setActiveTab] = React.useState("login");
  const [authError, setAuthError] = React.useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setAuthError(null);
  };
  return (
    <article className="flex items-center justify-center h-dvh w-full">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="p-6 border shadow-lg rounded-lg"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6 h-auto">
          <TabsTrigger
            value="login"
            className="data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            Sign in
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:bg-primary data-[state=active]:text-background"
          >
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login
            setActiveTab={setActiveTab}
            authError={authError}
            setAuthError={setAuthError}
          />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp authError={authError} setAuthError={setAuthError} />
        </TabsContent>
      </Tabs>
    </article>
  );
}

export default Auth;
