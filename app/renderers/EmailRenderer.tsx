import { Email } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import type { RendererProps } from "../types/ProgressLetter";

export default function EmailRenderer(props: RendererProps) {
  return (
    <Email>
      <TemplateRenderer {...props} />
    </Email>
  );
}
