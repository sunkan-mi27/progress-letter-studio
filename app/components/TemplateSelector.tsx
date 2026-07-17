"use client";

import "../style/TemplateSelector.css";

type Props = {
  template: string;
  setTemplate: (value: any) => void;
};

export default function TemplateSelector({ template, setTemplate }: Props) {
  return (
    <div className="template-selector">
      <label>Template Style</label>

      <select value={template} onChange={(e) => setTemplate(e.target.value)}>
        <option value="academic">🎓 Academic</option>
        <option value="professional">💼 Professional</option>
        <option value="modern">✨ Modern</option>
        <option value="minimal">📑 Minimal</option>
      </select>
    </div>
  );
}
