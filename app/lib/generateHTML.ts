import type { ProgressLetterData } from "../types/ProgressLetter";

export function generateHTML(data: ProgressLetterData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Progress Letter</title>
</head>
<body>
  <h1>${data.studentName}</h1>
  <p><strong>Course:</strong> ${data.course}</p>
  <p><strong>Instructor:</strong> ${data.instructor}</p>
  <p>${data.progress}</p>
  <p>${data.date}</p>
</body>
</html>
  `.trim();
}
