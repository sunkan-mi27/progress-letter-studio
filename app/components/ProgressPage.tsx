import { Page } from "@unlayer/react-elements";
import PageRenderer from "../renderers/PageRenderer";

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
      <PageRenderer {...props} />
    </Page>
  );
}
