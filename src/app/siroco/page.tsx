import React from "react";
import SirocoNav from "@/components/siroco/SirocoNav";
import SirocoHero from "@/components/siroco/SirocoHero";
import SirocoAbout from "@/components/siroco/SirocoAbout";
import SirocoServices from "@/components/siroco/SirocoServices";
import SirocoHyrox from "@/components/siroco/SirocoHyrox";
import SirocoAchievements from "@/components/siroco/SirocoAchievements";
import SirocoSchedule from "@/components/siroco/SirocoSchedule";
import SirocoContact from "@/components/siroco/SirocoContact";
import SirocoFooter from "@/components/siroco/SirocoFooter";

export default function SirocoPage() {
  return (
    <main
      style={{
        background: "#08080A",
        color: "#fff",
        fontFamily: "var(--font-archivo), -apple-system, sans-serif",
        minHeight: "100vh",
      }}
    >
      <SirocoNav />
      <SirocoHero />
      <SirocoAbout />
      <SirocoServices />
      <SirocoHyrox />
      <SirocoAchievements />
      <SirocoSchedule />
      <SirocoContact />
      <SirocoFooter />
    </main>
  );
}
