import AcademicTemplate from "../templates/AcademicTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import type { RendererProps } from "../types/ProgressLetter";

export default function TemplateRenderer(props: RendererProps) {
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
