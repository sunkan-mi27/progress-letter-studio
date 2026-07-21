import "../style/AcademicTemplate.css";

type AcademicTemplateProps = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
};

export default function AcademicTemplate({
  studentName,
  course,
  instructor,
  progress,
  date,
}: AcademicTemplateProps) {
  return (
    <article className="academic-letter">
      <header className="academic-header">
        <div className="academic-brand">
          <div className="academic-logo">🎓</div>

          <div>
            <h1>Progress Letter Studio University</h1>

            <p>Office of Academic Affairs</p>
          </div>
        </div>

        <div className="academic-date">
          <span>Date Issued</span>
          <strong>{date}</strong>
        </div>
      </header>

      <div className="academic-divider"></div>

      <section className="letter-intro">
        <h2>Academic Progress Report</h2>

        <p>
          This official document summarizes the student's academic performance
          and instructor evaluation for the current course.
        </p>
      </section>

      <section className="student-grid">
        <div className="detail-card">
          <span>Student</span>
          <strong>{studentName}</strong>
        </div>

        <div className="detail-card">
          <span>Course</span>
          <strong>{course}</strong>
        </div>

        <div className="detail-card">
          <span>Instructor</span>
          <strong>{instructor}</strong>
        </div>

        <div className="detail-card">
          <span>Status</span>
          <strong>In Progress</strong>
        </div>
      </section>

      <section className="evaluation">
        <h3>Instructor Evaluation</h3>

        <p>{progress}</p>
      </section>

      <footer className="academic-footer">
        <div>
          <div className="signature-line"></div>

          <p>
            <strong>Dean of Academic Affairs</strong>
          </p>

          <p>Progress Letter Studio University</p>
        </div>

        <div className="official-stamp">VERIFIED</div>
      </footer>
    </article>
  );
}
