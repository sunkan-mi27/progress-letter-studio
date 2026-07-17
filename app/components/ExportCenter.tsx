"use client";

import "../style/ExportCenter.css";
import { downloadFile } from "../lib/export";
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

  return (
    <div className="export-center">
      <h2>Export Center</h2>

      <p>Export your progress letter in multiple professional formats.</p>

      <div className="export-grid">
        <button>
          📧
          <span>Export Email</span>
        </button>

        <button>
          📄
          <span>Export Document</span>
        </button>

        <button>
          📋
          <span>Copy HTML</span>
        </button>

        <button onClick={exportJSON}>
          🧩
          <span>Download JSON</span>
        </button>
      </div>
    </div>
  );
}
