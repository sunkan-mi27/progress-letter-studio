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
    <div className="academic-letter">
      <header className="academic-header">
        <div className="academic-logo">🎓</div>

        <div>
          <h1>Academic Progress Letter</h1>
          <p>Progress Letter Studio University</p>
        </div>
      </header>

      <hr />

      <section className="student-details">
        <div>
          <strong>Student</strong>
          <p>{studentName}</p>
        </div>

        <div>
          <strong>Course</strong>
          <p>{course}</p>
        </div>

        <div>
          <strong>Instructor</strong>
          <p>{instructor}</p>
        </div>

        <div>
          <strong>Date</strong>
          <p>{date}</p>
        </div>
      </section>

      <section className="academic-summary">
        <h2>Instructor Evaluation</h2>

        <p>{progress}</p>
      </section>

      <footer className="academic-footer">
        <div className="signature-line"></div>

        <p>Dean of Academic Affairs</p>
      </footer>
    </div>
  );
}
