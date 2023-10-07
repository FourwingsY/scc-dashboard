"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { fetch } from "@/utils/fetch";

export default function GoogleAuthButton() {
  const router = useRouter();

  useEffect(() => {
    fetch("/gapi/oauth/check").then((res) => {
      if (res.status === 200) {
        router.push("/dashboard");
      } else {
        localStorage.removeItem("token");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const { token, error } = event.data as { token?: string; error?: string };
      if (error) {
        alert(error);
      }
      if (token) {
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    });
  }, []);

  const googleAuth = async () => {
    const res = await fetch(`/gapi/oauth`);
    const data = (await res.json()) as { url: string };
    window.open(data.url, "_blank");
  };
  return <button onClick={googleAuth}>Google Auth</button>;
}
