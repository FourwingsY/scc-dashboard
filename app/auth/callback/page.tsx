"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const error = searchParams.get("error");
    if (token) {
      window.opener?.postMessage({ token }, window.location.origin);
    }
    if (error) {
      window.opener?.postMessage({ error }, window.location.origin);
    }
    window.close();
  }, [searchParams]);

  return null;
}
