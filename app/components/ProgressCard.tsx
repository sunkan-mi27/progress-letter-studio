type ProgressCardProps = {
  studentName: string;
  course: string;
  progress: string;
  instructor: string;
  date: string;
};

export default function ProgressCard({
  studentName,
  course,
  progress,
  instructor,
  date,
}: ProgressCardProps) {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "16px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>📈 Progress Report</h2>

      <p>
        <strong>Student:</strong> {studentName}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Progress:</strong> {progress}
      </p>

      <p>
        <strong>Instructor:</strong> {instructor}
      </p>

      <p>
        <strong>Date:</strong> {date}
      </p>
    </div>
  );
}
