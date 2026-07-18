import { Document } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import type { RendererProps } from "../types/ProgressLetter";

export default function DocumentRenderer(props: RendererProps) {
  return (
    <Document>
      <TemplateRenderer {...props} />
    </Document>
  );
}
