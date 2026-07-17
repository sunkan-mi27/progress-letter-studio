import AcademicTemplate from "../templates/AcademicTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";

type Props = {
  template: "academic" | "professional" | "modern" | "minimal";
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
};

export default function TemplateRenderer(props: Props) {
  switch (props.template) {
    case "academic":
      return <AcademicTemplate {...props} />;

    case "professional":
      return <ProfessionalTemplate {...props} />;

    case "modern":
      return <ModernTemplate {...props} />;

    case "minimal":
      return <MinimalTemplate {...props} />;

    default:
      return <AcademicTemplate {...props} />;
  }
}
