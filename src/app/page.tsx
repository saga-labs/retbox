"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    // Replace this with your actual authentication check logic
    const isAuthenticated = checkUserAuthentication();

    if (isAuthenticated) {
      router.push("/dashboard"); // Redirect to the main app if authenticated
    } else {
      router.push("/auth"); // Redirect to the login page if not authenticated
    }
  }, [router]);

  return <div>Redirecting...</div>;
}

function checkUserAuthentication() {
  // Implement your authentication check logic here
  return true;
}
