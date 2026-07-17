"use client";

import "../style/CodePanel.css";

type Props = {
  html: string;
};

export default function CodePanel({ html }: Props) {
  return (
    <div className="code-panel">
      <div className="code-header">
        <h2>Generated HTML</h2>

        <button onClick={() => navigator.clipboard.writeText(html)}>
          📋 Copy
        </button>
      </div>

      <pre>
        <code>{html}</code>
      </pre>
    </div>
  );
}
