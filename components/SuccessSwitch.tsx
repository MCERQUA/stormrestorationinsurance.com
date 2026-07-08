"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function SuccessSwitch({
  success,
  form,
}: {
  success: ReactNode;
  form: ReactNode;
}) {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsSuccess(new URLSearchParams(window.location.search).get("success") === "1");
  }, []);

  return <>{isSuccess ? success : form}</>;
}
