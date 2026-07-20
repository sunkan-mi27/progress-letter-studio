"use client";

import "./style/Home.css";
import { RendererProvider } from "./context/RendererContext";

import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <RendererProvider>
      <HomeContent />
    </RendererProvider>
  );
}
