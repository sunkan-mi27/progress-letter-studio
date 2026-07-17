import "../style/ModernTemplate.css";

type ModernTemplateProps = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
};

export default function ModernTemplate({
  studentName,
  course,
  instructor,
  progress,
  date,
}: ModernTemplateProps) {
  return (
    <div className="modern-report">
      <header className="modern-hero">
        <div>
          <p className="modern-tag">PROGRESS LETTER STUDIO</p>

          <h1>Growth Progress Summary</h1>

          <p>Track growth. Celebrate achievements.</p>
        </div>
      </header>

      <section className="modern-cards">
        <div className="modern-card">
          <span>Student</span>
          <h3>{studentName}</h3>
        </div>

        <div className="modern-card">
          <span>Course</span>
          <h3>{course}</h3>
        </div>

        <div className="modern-card">
          <span>Instructor</span>
          <h3>{instructor}</h3>
        </div>
      </section>

      <section className="achievement-box">
        <h2>Achievement Summary</h2>

        <p>{progress}</p>
      </section>

      <section className="timeline">
        <h2>Progress Timeline</h2>

        <div className="timeline-item">✅ Started Learning</div>

        <div className="timeline-item">🚀 Built Practical Projects</div>

        <div className="timeline-item">🎯 Ready For Next Milestone</div>
      </section>

      <footer className="modern-footer">
        <div>
          <strong>Date</strong>

          <p>{date}</p>
        </div>
      </footer>
    </div>
  );
}
