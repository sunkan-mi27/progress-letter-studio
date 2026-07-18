"use client";

import "../style/ExportCenter.css";
import { downloadFile } from "../lib/downloadFile";
import { copyToClipboard } from "../lib/copyToClipboard";
import { generateHTML } from "../lib/generateHTML";

type ExportCenterProps = {
  data: {
    studentName: string;
    course: string;
    instructor: string;
    progress: string;
  };
};

export default function ExportCenter({ data }: ExportCenterProps) {
  function exportJSON() {
    downloadFile(
      "progress-letter.json",
      JSON.stringify(data, null, 2),
      "application/json",
    );
  }

  const html = generateHTML({ ...data, date: new Date().toLocaleDateString() });

  return (
    <div className="export-grid">
      <button>
        📧
        <span>Export Email</span>
      </button>

      <button>
        📄
        <span>Export Document</span>
      </button>

      <button onClick={() => copyToClipboard(html)}>
        📋
        <span>Copy HTML</span>
      </button>

      <button onClick={exportJSON}>
        🧩
        <span>Download JSON</span>
      </button>

      <button
        onClick={() => downloadFile("progress-letter.html", html, "text/html")}
      >
        🌏
        <span>Export HTML</span>
      </button>
    </div>
  );
}
