"use client";

import "../style/CodePanel.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  html: string;
};

export default function CodePanel({ html }: Props) {
  async function copyHTML() {
    await navigator.clipboard.writeText(html);
  }

  return (
    <div className="code-panel">
      <div className="code-header">
        <div className="code-info">
          <div className="file-icon">🌐</div>

          <div>
            <h3>generated.html</h3>
            <span>Live generated source</span>
          </div>
        </div>

        <button className="copy-btn" onClick={copyHTML}>
          📋 Copy HTML
        </button>
      </div>

      <SyntaxHighlighter
        language="html"
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "24px",
          background: "#1e1e1e",
          fontSize: "14px",
          borderRadius: "0",
        }}
      >
        {html}
      </SyntaxHighlighter>
    </div>
  );
}
