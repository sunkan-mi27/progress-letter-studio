"use client";

import "../style/Editor.css";

type EditorProps = {
  data: {
    studentName: string;
    course: string;
    instructor: string;
    progress: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      studentName: string;
      course: string;
      instructor: string;
      progress: string;
    }>
  >;
};

export default function Editor({ data, setData }: EditorProps) {
  return (
    <div className="editor-wrapper">
      <div className="editor-heading">
        <h2>📝 Progress Letter Editor</h2>

        <p>
          Update the information below and watch every renderer update instantly
          in real time.
        </p>
      </div>

      <div className="editor">
        <div className="editor-group">
          <label>Student Name</label>

          <input
            type="text"
            placeholder="Enter student's full name"
            value={data.studentName}
            onChange={(e) =>
              setData({
                ...data,
                studentName: e.target.value,
              })
            }
          />
        </div>

        <div className="editor-group">
          <label>Course</label>

          <input
            type="text"
            placeholder="Frontend Development"
            value={data.course}
            onChange={(e) =>
              setData({
                ...data,
                course: e.target.value,
              })
            }
          />
        </div>

        <div className="editor-group">
          <label>Instructor</label>

          <input
            type="text"
            placeholder="Jane Smith"
            value={data.instructor}
            onChange={(e) =>
              setData({
                ...data,
                instructor: e.target.value,
              })
            }
          />
        </div>

        <div className="editor-group">
          <label>Progress Summary</label>

          <textarea
            placeholder="Describe the student's progress, achievements, areas of improvement, and overall performance..."
            value={data.progress}
            onChange={(e) =>
              setData({
                ...data,
                progress: e.target.value,
              })
            }
          />
        </div>

        <div className="editor-footer">
          <span>⚡ Live preview updates instantly</span>
        </div>
      </div>
    </div>
  );
}
