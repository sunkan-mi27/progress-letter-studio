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
    <div className="minimal-letter">
      <h1>Progress Letter</h1>

      <div className="minimal-info">
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
      </div>

      <section className="minimal-summary">
        <h2>Summary</h2>

        <p>{progress}</p>
      </section>

      <footer>
        <div className="minimal-signature"></div>

        <p>Authorized Signature</p>
      </footer>
    </div>
  );
}
