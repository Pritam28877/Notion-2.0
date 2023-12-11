import React from "react";
import { AuthUser } from "@supabase/supabase-js";
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Loader from "../global/loading";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div
                className="flex
            items-center
            gap-4"
              >
                <div className="text-5xl">
                  <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                    {selectedEmoji}
                  </EmojiPicker>
                </div>
                <div className="w-full ">
                  <Label
                    htmlFor="workspaceName"
                    className="text-sm
                  text-muted-foreground
                "
                  >
                    Name
                  </Label>
                  <Input
                    id="workspaceName"
                    type="text"
                    placeholder="Workspace Name"
                    disabled={isLoading}
                    {...register("workspaceName", {
                      required: "Workspace name is required",
                    })}
                  />
                  <small className="text-red-600">
                    {errors?.workspaceName?.message?.toString()}
                  </small>
                </div>
              </div>
              <div>
                <Label
                  htmlFor="logo"
                  className="text-sm
                  text-muted-foreground
                "
                >
                  Workspace Logo
                </Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  placeholder="Workspace Name"
                  // disabled={isLoading || subscription?.status !== 'active'}
                  {...register("logo", {
                    required: false,
                  })}
                />
                <small className="text-red-600">
                  {errors?.logo?.message?.toString()}
                </small>
                {subscription?.status !== "active" && (
                  <small
                    className="
                  text-muted-foreground
                  block
              "
                  >
                    To customize your workspace, you need to be on a Pro Plan
                  </small>
                )}
              </div>
              <div className="self-end">
                <Button disabled={isLoading} type="submit">
                  {!isLoading ? "Create Workspace" : <Loader />}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardSetUp;
