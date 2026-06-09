"use client";
import React, { useState, useEffect } from "react";
import Landing from "@/components/landing/Landing";
import InkApp from "@/components/app/InkApp";

export default function Home() {
  const [view, setView] = useState<"landing" | "app">("landing");

  useEffect(() => {
    const saved = localStorage.getItem("lw_view");
    if (saved === "app") setView("app");
  }, []);

  function goToApp() {
    setView("app");
    localStorage.setItem("lw_view", "app");
    window.scrollTo(0, 0);
  }

  function goToLanding() {
    setView("landing");
    localStorage.setItem("lw_view", "landing");
    window.scrollTo(0, 0);
  }

  return view === "landing"
    ? <Landing onApp={goToApp} />
    : <InkApp onExit={goToLanding} />;
}
