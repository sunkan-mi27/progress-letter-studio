import "../style/ProfessionalTemplate.css";

type ProfessionalTemplateProps = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
};

export default function ProfessionalTemplate({
  studentName,
  course,
  instructor,
  progress,
  date,
}: ProfessionalTemplateProps) {
  return (
    <article className="professional-report">
      <header className="professional-header">
        <div>
          <span className="company-name">PROGRESS LETTER STUDIO INC.</span>

          <h1>Employee Performance Review</h1>

          <p>Human Resources · Annual Performance Assessment</p>
        </div>

        <div className="report-status">APPROVED</div>
      </header>

      <section className="employee-grid">
        <div className="employee-item">
          <span>Employee</span>
          <strong>{studentName}</strong>
        </div>

        <div className="employee-item">
          <span>Department</span>
          <strong>{course}</strong>
        </div>

        <div className="employee-item">
          <span>Manager</span>
          <strong>{instructor}</strong>
        </div>

        <div className="employee-item">
          <span>Review Date</span>
          <strong>{date}</strong>
        </div>
      </section>

      <section className="executive-summary">
        <h2>Executive Summary</h2>

        <p>{progress}</p>
      </section>

      <section className="metrics">
        <div className="metric">
          <span>Productivity</span>
          <strong>92%</strong>
        </div>

        <div className="metric">
          <span>Teamwork</span>
          <strong>95%</strong>
        </div>

        <div className="metric">
          <span>Attendance</span>
          <strong>99%</strong>
        </div>

        <div className="metric">
          <span>Overall Rating</span>
          <strong>Excellent</strong>
        </div>
      </section>

      <footer className="professional-footer">
        <div>
          <div className="signature-line"></div>

          <p>
            <strong>HR Director</strong>
          </p>

          <p>Progress Letter Studio Inc.</p>
        </div>

        <div className="approval-box">VERIFIED</div>
      </footer>
    </article>
  );
}
