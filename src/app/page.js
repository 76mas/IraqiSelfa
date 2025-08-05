"use client";

import { useEffect } from "react";
import HomePage from "./(dashboard)/user/page";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => {
          console.log("Service Worker registered.", reg);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);

  return (
    <div className="flex w-full h-full">
      <HomePage />
    </div>
  );
}
