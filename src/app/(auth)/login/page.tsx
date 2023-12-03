"usc client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FromSchema>>({
    mode: "onChange",
    resolver: zodResolver(FromSchema),
    defaultValues: { email: "", password: "" },
  });

  return <div>LoginPage</div>;
};

export default LoginPage;
