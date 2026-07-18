import { Page } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import { RendererProps } from "../types/ProgressLetter";

export default function PageRenderer(props: RendererProps) {
  return (
    <Page>
      <TemplateRenderer {...props} />
    </Page>
  );
}
