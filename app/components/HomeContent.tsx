import { useState } from "react";
import Editor from "./Editor";
import PageRenderer from "../renderers/PageRenderer";
import EmailRenderer from "../renderers/EmailRenderer";
import DocumentRenderer from "../renderers/DocumentRenderer";
import ThemeSwitcher from "./ThemeSwitcher";
import ExportCenter from "./ExportCenter";
import TemplateSelector from "./TemplateSelector";
import CodePanel from "./CodePanel";
import { generateHTML } from "../lib/generateHTML";
import { useRenderer } from "../context/RendererContext";
import ElementsStudio from "./ElementsStudio";
import "../style/ElementsStudio.css";

export default function HomeContent() {
  const { data, setData, template, setTemplate } = useRenderer();
  const [previewMode, setPreviewMode] = useState<
    "email" | "document" | "page" | "compare"
  >("page");
  const generatedHTML = generateHTML({
    ...data,
    date: new Date().toLocaleDateString(),
  });

  return (
    <main className="home">
      <ThemeSwitcher />
      <TemplateSelector template={template} setTemplate={setTemplate} />

      <ElementsStudio
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
      />

      <section className="section-block">
        <div className="section-header">
          <h2>📝 Live Editor & Preview</h2>
          <p>
            Edit your progress letter and watch every renderer update instantly.
          </p>
        </div>
        <div className="workspace">
          <div className="editor-panel">
            <Editor data={data} setData={setData} />
          </div>

          <div className="preview-area" key={`${previewMode}-${template}`}>
            {previewMode === "page" && (
              <PageRenderer
                studentName={data.studentName}
                course={data.course}
                instructor={data.instructor}
                progress={data.progress}
                date={new Date().toLocaleDateString()}
                template={template}
              />
            )}

            {previewMode === "email" && (
              <EmailRenderer
                studentName={data.studentName}
                course={data.course}
                instructor={data.instructor}
                progress={data.progress}
                date={new Date().toLocaleDateString()}
                template={template}
              />
            )}

            {previewMode === "document" && (
              <DocumentRenderer
                studentName={data.studentName}
                course={data.course}
                instructor={data.instructor}
                progress={data.progress}
                date={new Date().toLocaleDateString()}
                template={template}
              />
            )}

            {previewMode === "compare" && (
              <div className="compare-grid">
                <div className="compare-card">
                  <h3>🌐 Page</h3>

                  <PageRenderer
                    studentName={data.studentName}
                    course={data.course}
                    instructor={data.instructor}
                    progress={data.progress}
                    date={new Date().toLocaleDateString()}
                    template={template}
                  />
                </div>

                <div className="compare-card">
                  <h3>📧 Email</h3>

                  <EmailRenderer
                    studentName={data.studentName}
                    course={data.course}
                    instructor={data.instructor}
                    progress={data.progress}
                    date={new Date().toLocaleDateString()}
                    template={template}
                  />
                </div>

                <div className="compare-card">
                  <h3>📄 Document</h3>

                  <DocumentRenderer
                    studentName={data.studentName}
                    course={data.course}
                    instructor={data.instructor}
                    progress={data.progress}
                    date={new Date().toLocaleDateString()}
                    template={template}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>🚀 Export Center</h2>
          <p>Export your letter in multiple professional formats.</p>
        </div>

        <ExportCenter data={data} />
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>💻 Generated HTML</h2>
          <p>Live HTML generated from your current template.</p>
        </div>

        <CodePanel html={generatedHTML} />
      </section>
    </main>
  );
}
