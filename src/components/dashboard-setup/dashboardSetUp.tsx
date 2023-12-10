import React from "react";
import { AuthUser } from "@supabase/supabase-js";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface DashboardSetUpProps {
  user: AuthUser;
  subscription: {} | null;
}

const DashboardSetUp: React.FC<DashboardSetUpProps> = ({
  subscription,
  user,
}) => {
  return (
    <>
      <Card
        className="w-[800px]
   h-screen
   sm:h-auto"
      >
        <CardHeader>
            <CardTitle>Dashboard Setup</CardTitle>
            <CardDescription>
                Welcome to Cypress! Let&apos;s get you set up.
            </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default DashboardSetUp;
