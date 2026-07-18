import { Email } from "@unlayer/react-elements";
import EmailRenderer from "../renderers/EmailRenderer";

type Props = {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
  template: "academic" | "professional" | "modern" | "minimal";
};

export default function ProgressEmail(props: Props) {
  return (
    <Email>
      <EmailRenderer {...props} />
    </Email>
  );
}
