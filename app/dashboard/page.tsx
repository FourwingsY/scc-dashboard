"use client";

import useData from "./useData";

export default function Page() {
  const { isLoading, sheets } = useData();
  console.log(sheets);

  return <div>{isLoading ? "LOADING DATA..." : "Got it!"}</div>;
}
