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
    <div>
      <h2>Editor</h2>

      <div className="editor">
        <div className="editor-group">
          <input
            placeholder="Student Name"
            value={data.studentName}
            onChange={(e) => setData({ ...data, studentName: e.target.value })}
          />
        </div>

        <div className="editor-group">
          <input
            placeholder="Course"
            value={data.course}
            onChange={(e) => setData({ ...data, course: e.target.value })}
          />
        </div>

        <div className="editor-group">
          <input
            placeholder="Instructor"
            value={data.instructor}
            onChange={(e) => setData({ ...data, instructor: e.target.value })}
          />
        </div>

        <div className="editor-group">
          <textarea
            placeholder="Progress..."
            value={data.progress}
            onChange={(e) => setData({ ...data, progress: e.target.value })}
          />
        </div>
      </div>

      <div className="editor-footer">Live preview update instantly</div>
    </div>
  );
}
