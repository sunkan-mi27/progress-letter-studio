"use client";

import { useState } from "react";
import Editor from "./components/Editor";
import ProgressPage from "./components/ProgressPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./style/Home.css";
import ProgressEmail from "./components/ProgressEmail";
import ProgressDocument from "./components/ProgressDocument";
import ExportCenter from "./components/ExportCenter";
import TemplateSelector from "./components/TemplateSelector";
import CodePanel from "./components/CodePanel";

export default function Home() {
  const [previewMode, setPreviewMode] = useState<"email" | "document" | "page">(
    "page",
  );
  const [template, setTemplate] = useState<
    "academic" | "professional" | "modern" | "minimal"
  >("academic");
  const [data, setData] = useState({
    studentName: "John Doe",
    course: "Frontend Development",
    instructor: "Jane Smith",
    progress:
      "Excellent progress throughout the current learning phase. Assignments are completed on time and practical understanding continues to improve.",
  });

  const generatedHTML = `<h1>${data.studentName}</h1>
  <p>${data.progress}</p>`;

  return (
    <main className="home">
      <ThemeSwitcher />
      <TemplateSelector template={template} setTemplate={setTemplate} />

      <div className="preview-switcher">
        <button
          onClick={() => setPreviewMode("page")}
          className={previewMode === "page" ? "active" : ""}
        >
          🌐 Web
        </button>

        <button
          onClick={() => setPreviewMode("email")}
          className={previewMode === "email" ? "active" : ""}
        >
          📧 Email
        </button>

        <button
          onClick={() => setPreviewMode("document")}
          className={previewMode === "document" ? "active" : ""}
        >
          📄 Document
        </button>
      </div>

      <div className="workspace">
        <Editor data={data} setData={setData} />

        <div className="preview-area" key={`${previewMode}-${template}`}>
          {previewMode === "page" && (
            <ProgressPage
              studentName={data.studentName}
              course={data.course}
              instructor={data.instructor}
              progress={data.progress}
              date={new Date().toLocaleDateString()}
              template={template}
            />
          )}

          {previewMode === "email" && (
            <ProgressEmail
              studentName={data.studentName}
              course={data.course}
              instructor={data.instructor}
              progress={data.progress}
              date={new Date().toLocaleDateString()}
              template={template}
            />
          )}

          {previewMode === "document" && (
            <ProgressDocument
              studentName={data.studentName}
              course={data.course}
              instructor={data.instructor}
              progress={data.progress}
              date={new Date().toLocaleDateString()}
              template={template}
            />
          )}
        </div>
      </div>

      <ExportCenter data={data} />

      <CodePanel html={generatedHTML} />
    </main>
  );
}
