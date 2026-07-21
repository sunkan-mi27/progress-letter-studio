import "../style/DocumentFrame.css";

type DocumentFrameProps = {
  children: React.ReactNode;
};

export default function DocumentFrame({ children }: DocumentFrameProps) {
  return (
    <div className="document-frame">
      <div className="document-header">
        <div>
          <h3>Print Preview</h3>
          <p>A4 Portrait • Ready for Export</p>
        </div>

        <span className="document-badge">PDF Ready</span>
      </div>

      <div className="document-workspace">
        <div className="document-paper">{children}</div>
      </div>
    </div>
  );
}
