import { Document } from "@unlayer/react-elements";
import TemplateRenderer from "../renderers/TemplateRenderer";
import DocumentRenderer from "../renderers/DocumentRenderer";

type Props = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
  template: "academic" | "professional" | "modern" | "minimal";
};

export default function ProgressDocument(props: Props) {
  return (
    <Document>
      <DocumentRenderer {...props} />
    </Document>
  );
}
