"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import LineChart from "./line-chart";
import React from "react";

// export const metadata = {
//   title: "Dashboard page",
//   description: "Learning Next.js",
// };

const page = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Pushed");
    router.push("/");
  };
  return (
    <div>
      <LineChart />
      <Link href="/">Home</Link>
      <Link href="./products">Products</Link>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default page;
