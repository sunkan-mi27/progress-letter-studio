import { Document } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import type { RendererProps } from "../types/ProgressLetter";
import DocumentFrame from "../components/DocumentFrame";

export default function DocumentRenderer(props: RendererProps) {
  return (
    <DocumentFrame>
      <Document>
        <TemplateRenderer {...props} />
      </Document>
    </DocumentFrame>
  );
}
