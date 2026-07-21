import "../style/BrowserFrame.css";

type BrowserFrameProps = {
  children: React.ReactNode;
};

export default function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="browser-frame">
      <header className="browser-header">
        <div className="browser-title">
          <strong>Progress Letter Studio</strong>
          <span>Live Web Preview</span>
        </div>

        <div className="browser-url">
          https://progress-letter-studio.vercel.app
        </div>

        <div className="browser-status">
          <span className="live-indicator"></span>
          Live
        </div>
      </header>

      <div className="browser-body">{children}</div>
    </div>
  );
}
