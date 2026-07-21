import "../style/EmailFrame.css";

type EmailFrameProps = {
  children: React.ReactNode;
};

export default function EmailFrame({ children }: EmailFrameProps) {
  return (
    <div className="email-frame">
      <div className="email-header">
        <div>
          <h3>Email Preview</h3>
          <p>Progress Letter Studio Mail</p>
        </div>

        <span className="email-status">Ready to Send</span>
      </div>

      <div className="email-meta">
        <div>
          <strong>To</strong>
          <span>student@example.com</span>
        </div>

        <div>
          <strong>Subject</strong>
          <span>Progress Letter</span>
        </div>
      </div>

      <div className="email-body">{children}</div>
    </div>
  );
}
