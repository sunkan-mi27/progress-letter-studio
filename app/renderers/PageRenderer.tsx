import { Page } from "@unlayer/react-elements";
import TemplateRenderer from "./TemplateRenderer";
import { RendererProps } from "../types/ProgressLetter";
import BrowserFrame from "../components/BrowserFrame";

export default function PageRenderer(props: RendererProps) {
  return (
    <BrowserFrame>
      <Page>
        <TemplateRenderer {...props} />
      </Page>
    </BrowserFrame>
  );
}
