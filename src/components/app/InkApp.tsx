"use client";
import React, { useState } from "react";
import AppShell from "./AppShell";
import Dashboard from "./Dashboard";
import Processing from "./Processing";
import Editor from "./Editor";
import Gallery from "./Gallery";
import Settings from "./Settings";
import ExportScreen from "./ExportScreen";
import type { AppCtx, GalleryItem } from "./types";

const BG_COLORS = [
  "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)",
  "linear-gradient(135deg, #7a9db5 0%, #4a6b80 100%)",
  "linear-gradient(135deg, #6b8f71 0%, #3d5a40 100%)",
];

const SEED: GalleryItem[] = [
  { id: 1, bgColor: BG_COLORS[0], style: "Standard", name: "Cráneo" },
  { id: 2, bgColor: BG_COLORS[1], style: "Outline", name: "Lobo geométrico" },
  { id: 3, bgColor: BG_COLORS[2], style: "Hatching", name: "Rosa" },
];

export default function InkApp({ onExit }: { onExit: () => void }) {
  const [screen, setScreen] = useState("dashboard");
  const [credits, setCredits] = useState(3);
  const [image, setImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>(SEED);

  const ctx: AppCtx = {
    screen, setScreen, credits, image, setImage, gallery, onExit,
    startProcessing: (src) => { setImage(src || null); setScreen("processing"); },
    finishProcessing: () => {
      setCredits(c => Math.max(0, c - 1));
      setGallery(g => [{ id: Date.now(), bgColor: BG_COLORS[0], style: "Standard", name: "Nuevo stencil", src: image || undefined }, ...g]);
      setScreen("editor");
    },
    removeItem: (id) => setGallery(g => g.filter(x => x.id !== id)),
  };

  let body: React.ReactNode;
  if (screen === "dashboard") body = <Dashboard ctx={ctx} />;
  else if (screen === "processing") body = <Processing ctx={ctx} />;
  else if (screen === "editor") body = <Editor ctx={ctx} />;
  else if (screen === "export") body = <ExportScreen ctx={ctx} />;
  else if (screen === "gallery") body = <Gallery ctx={ctx} />;
  else if (screen === "settings") body = <Settings ctx={ctx} />;

  return <AppShell ctx={ctx}>{body}</AppShell>;
}
