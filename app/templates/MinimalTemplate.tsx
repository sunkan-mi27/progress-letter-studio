import "../style/MinimalTemplate.css";

type MinimalTemplateProps = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
};

export default function MinimalTemplate({
  studentName,
  course,
  instructor,
  progress,
  date,
}: MinimalTemplateProps) {
  return (
    <article className="minimal-letter">
      <header className="minimal-header">
        <p className="minimal-brand">Progress Letter Studio</p>

        <h1>Progress Letter</h1>

        <span>{date}</span>
      </header>

      <section className="minimal-grid">
        <div>
          <label>Student</label>
          <p>{studentName}</p>
        </div>

        <div>
          <label>Course</label>
          <p>{course}</p>
        </div>

        <div>
          <label>Instructor</label>
          <p>{instructor}</p>
        </div>

        <div>
          <label>Status</label>
          <p>Completed</p>
        </div>
      </section>

      <section className="minimal-summary">
        <h2>Summary</h2>

        <p>{progress}</p>
      </section>

      <footer className="minimal-footer">
        <div>
          <div className="minimal-signature"></div>

          <span>Authorized Signature</span>
        </div>

        <p>Generated with Progress Letter Studio</p>
      </footer>
    </article>
  );
}
