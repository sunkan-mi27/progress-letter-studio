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
    <div className="professional-report">
      <header className="professional-header">
        <div>
          <p className="company-name">PROGRESS LETTER STUDIO</p>
          <h1>Employee Performance Report</h1>
        </div>

        <div className="report-badge">Performance</div>
      </header>

      <section className="employee-card">
        <div>
          <span>Employee</span>
          <h3>{studentName}</h3>
        </div>

        <div>
          <span>Department</span>
          <h3>{course}</h3>
        </div>

        <div>
          <span>Manager</span>
          <h3>{instructor}</h3>
        </div>

        <div>
          <span>Review Date</span>
          <h3>{date}</h3>
        </div>
      </section>

      <section className="performance-summary">
        <h2>Performance Summary</h2>

        <p>{progress}</p>
      </section>

      <section className="performance-score">
        <div>
          <h3>Productivity</h3>
          <strong>92%</strong>
        </div>

        <div>
          <h3>Teamwork</h3>
          <strong>95%</strong>
        </div>

        <div>
          <h3>Attendance</h3>
          <strong>99%</strong>
        </div>
      </section>

      <footer className="professional-footer">
        <div className="signature"></div>

        <p>HR Manager Approval</p>
      </footer>
    </div>
  );
}
