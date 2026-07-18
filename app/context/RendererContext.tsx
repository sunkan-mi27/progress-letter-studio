"use client";

import { createContext, useContext, useState } from "react";

export type Template = "academic" | "professional" | "modern" | "minimal";

type ProgressData = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
};

type RendererContextType = {
  data: ProgressData;
  setData: React.Dispatch<React.SetStateAction<ProgressData>>;

  template: Template;
  setTemplate: React.Dispatch<React.SetStateAction<Template>>;
};

const RendererContext = createContext<RendererContextType | null>(null);

export function RendererProvider({ children }: { children: React.ReactNode }) {
  const [template, setTemplate] = useState<Template>("academic");

  const [data, setData] = useState({
    studentName: "John Doe",
    course: "Frontend Development",
    instructor: "Jane Smith",
    progress:
      "Excellent progress throughout the current learning phase. Assignments are completed on time and practical understanding continues to improve.",
  });

  return (
    <RendererContext.Provider
      value={{
        data,
        setData,
        template,
        setTemplate,
      }}
    >
      {children}
    </RendererContext.Provider>
  );
}

export function useRenderer() {
  const context = useContext(RendererContext);

  if (!context) {
    throw new Error("useRenderer must be used inside RendererProvider");
  }

  return context;
}
