import { Page } from "@unlayer/react-elements";
import TemplateRenderer from "../renderers/TemplateRenderer";

type Props = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
  template: "academic" | "professional" | "modern" | "minimal";
};

export default function ProgressPage(props: Props) {
  return (
    <Page>
      <TemplateRenderer {...props} />
    </Page>
  );
}
