export type TemplateType = "academic" | "professional" | "modern" | "minimal";

export interface ProgressLetterData {
  studentName: string;
  course: string;
  instructor: string;
  progress: string;
  date: string;
}

export interface RendererProps extends ProgressLetterData {
  template: TemplateType;
}
