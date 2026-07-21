import { Email } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import type { RendererProps } from "../types/ProgressLetter";
import EmailFrame from "../components/EmailFrame";

export default function EmailRenderer(props: RendererProps) {
  return (
    <EmailFrame>
      <Email>
        <TemplateRenderer {...props} />
      </Email>
    </EmailFrame>
  );
}
