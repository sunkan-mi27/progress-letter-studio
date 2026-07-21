import "../style/ElementsStudio.css";

type Props = {
  previewMode: "page" | "email" | "document" | "compare";
  setPreviewMode: React.Dispatch<
    React.SetStateAction<"page" | "email" | "document" | "compare">
  >;
};
export default function ElementsStudio({ previewMode, setPreviewMode }: Props) {
  return (
    <section className="elements-studio">
      <div className="studio-header">
        <span className="studio-badge">Powered by React Elements</span>

        <h2>Elements Studio</h2>

        <p>
          Render the same progress letter through multiple Elements renderers.
        </p>
      </div>

      <div className="renderer-grid">
        <button
          className={`renderer-card ${previewMode === "page" ? "active" : ""}`}
          onClick={() => setPreviewMode("page")}
        >
          <div className="renderer-icon">🌐</div>

          <h3>Page Renderer</h3>

          <p>Interactive web experience powered by React Elements.</p>
        </button>

        <button
          className={`renderer-card ${previewMode === "email" ? "active" : ""}`}
          onClick={() => setPreviewMode("email")}
        >
          <div className="renderer-icon">📧</div>

          <h3>Email Renderer</h3>

          <p>Responsive email layout using Elements components.</p>
        </button>

        <button
          className={`renderer-card ${
            previewMode === "document" ? "active" : ""
          }`}
          onClick={() => setPreviewMode("document")}
        >
          <div className="renderer-icon">📄</div>

          <h3>Document Renderer</h3>

          <p>Professional printable document rendered with Elements.</p>
        </button>
        <button
          className={`renderer-card ${
            previewMode === "compare" ? "active" : ""
          }`}
          onClick={() => setPreviewMode("compare")}
        >
          <div className="renderer-icon">🔍</div>

          <h3>Compare Renderers</h3>

          <p>
            View Page, Email, and Document side by side using the same data.
          </p>
        </button>
      </div>
      <div className="renderer-status">
        <span className="status-dot"></span>

        <div>
          <h4>
            {previewMode === "page" && "🌐 Page Renderer"}

            {previewMode === "email" && "📧 Email Renderer"}

            {previewMode === "document" && "📄 Document Renderer"}
          </h4>

          <p>
            Powered by <strong>@unlayer/react-elements</strong>
          </p>
        </div>

        <div className="status-ready">✅ Ready</div>
      </div>
    </section>
  );
}
