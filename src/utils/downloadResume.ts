import { jsPDF } from "jspdf";
import { cvData } from "../data/cv";

// Colors
const colors = {
  navy: [30, 58, 95] as [number, number, number],
  blue: [59, 130, 246] as [number, number, number],
  darkText: [31, 41, 55] as [number, number, number],
  grayText: [75, 85, 99] as [number, number, number],
  lightGray: [107, 114, 128] as [number, number, number],
  border: [229, 231, 235] as [number, number, number],
};

export const downloadResume = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper functions
  const setFont = (style: "normal" | "bold", size: number, color: [number, number, number]) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
  };

  const drawLine = (yPos: number, width: number = contentWidth, color: [number, number, number] = colors.border) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, margin + width, yPos);
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (y + requiredSpace > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const wrapText = (text: string, maxWidth: number, fontSize: number): string[] => {
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(text, maxWidth);
  };

  // ============ HEADER ============
  // Name
  setFont("bold", 24, colors.navy);
  doc.text(cvData.personal.fullName, margin, y);
  y += 8;

  // Title
  setFont("bold", 12, colors.blue);
  doc.text(cvData.personal.title, margin, y);
  y += 8;

  // Contact info
  setFont("normal", 9, colors.grayText);
  const contactInfo = [
    cvData.personal.email,
    cvData.personal.location,
    cvData.personal.linkedin,
    cvData.personal.github,
    cvData.personal.website,
  ].join("  |  ");
  const contactLines = wrapText(contactInfo, contentWidth, 9);
  contactLines.forEach((line) => {
    doc.text(line, margin, y);
    y += 4;
  });
  y += 2;

  // Header border
  doc.setDrawColor(...colors.navy);
  doc.setLineWidth(1);
  doc.line(margin, y, margin + contentWidth, y);
  y += 8;

  // ============ PROFILE ============
  setFont("bold", 10, colors.navy);
  doc.text("PROFILE", margin, y);
  y += 2;
  drawLine(y);
  y += 6;

  setFont("normal", 9, colors.darkText);
  const profileLines = wrapText(cvData.profile, contentWidth, 9);
  profileLines.forEach((line) => {
    doc.text(line, margin, y);
    y += 4.5;
  });
  y += 6;

  // ============ EXPERIENCE ============
  checkPageBreak(40);
  setFont("bold", 10, colors.navy);
  doc.text("EXPERIENCE", margin, y);
  y += 2;
  drawLine(y);
  y += 6;

  cvData.experience.forEach((exp) => {
    checkPageBreak(30);

    // Company and date on same line
    setFont("bold", 11, colors.navy);
    doc.text(exp.company, margin, y);
    setFont("normal", 9, colors.lightGray);
    doc.text(`${exp.startDate} – ${exp.endDate}`, pageWidth - margin, y, { align: "right" });
    y += 5;

    // Role
    setFont("bold", 10, colors.blue);
    doc.text(exp.role, margin, y);
    y += 6;

    // Highlights
    exp.highlights.forEach((highlight) => {
      checkPageBreak(8);
      setFont("normal", 9, colors.darkText);

      // Bullet point (using dash since default font doesn't support unicode bullets)
      doc.setTextColor(...colors.blue);
      doc.text("-", margin, y);

      // Highlight text with bold metrics
      const lines = wrapText(highlight.text, contentWidth - 8, 9);
      doc.setTextColor(...colors.darkText);
      lines.forEach((line) => {
        doc.text(line, margin + 6, y);
        y += 4.2;
      });
    });
    y += 4;
  });

  // ============ TECHNICAL SKILLS ============
  checkPageBreak(35);
  setFont("bold", 10, colors.navy);
  doc.text("TECHNICAL SKILLS", margin, y);
  y += 2;
  drawLine(y);
  y += 6;

  Object.values(cvData.skills).forEach((skillGroup) => {
    checkPageBreak(10);

    setFont("bold", 9, colors.navy);
    doc.text(skillGroup.label, margin, y);

    setFont("normal", 9, colors.grayText);
    const skillsText = skillGroup.items.join("  •  ");
    const skillLines = wrapText(skillsText, contentWidth - 25, 9);
    skillLines.forEach((line, idx) => {
      doc.text(line, margin + 22, y + idx * 4);
    });
    y += Math.max(skillLines.length * 4, 5) + 2;
  });
  y += 4;

  // ============ PROJECTS ============
  checkPageBreak(40);
  setFont("bold", 10, colors.navy);
  doc.text("PROJECTS", margin, y);
  y += 2;
  drawLine(y);
  y += 6;

  cvData.projects.forEach((project) => {
    checkPageBreak(20);

    // Project name and link
    setFont("bold", 10, colors.navy);
    doc.text(project.name, margin, y);

    if (project.liveUrl) {
      setFont("normal", 8, colors.blue);
      doc.text("→ Live Demo", pageWidth - margin, y, { align: "right" });
    } else if (project.company) {
      setFont("normal", 8, colors.lightGray);
      doc.text(project.company, pageWidth - margin, y, { align: "right" });
    }
    y += 5;

    // Description
    setFont("normal", 9, colors.grayText);
    const descLines = wrapText(project.description, contentWidth, 9);
    descLines.forEach((line) => {
      doc.text(line, margin, y);
      y += 4;
    });

    // Tech stack
    setFont("normal", 8, colors.lightGray);
    doc.text(project.tech.join("  •  "), margin, y);
    y += 8;
  });

  // ============ EDUCATION ============
  checkPageBreak(25);
  setFont("bold", 10, colors.navy);
  doc.text("EDUCATION", margin, y);
  y += 2;
  drawLine(y);
  y += 6;

  cvData.education.forEach((edu) => {
    setFont("bold", 10, colors.navy);
    doc.text(edu.institution, margin, y);
    setFont("normal", 9, colors.lightGray);
    const dateText = edu.startYear ? `${edu.startYear} – ${edu.endYear}` : edu.endYear;
    doc.text(dateText, pageWidth - margin, y, { align: "right" });
    y += 5;

    setFont("normal", 9, colors.grayText);
    doc.text(`${edu.degree}`, margin, y);
    if (edu.specialization) {
      setFont("normal", 9, colors.blue);
      doc.text(` · ${edu.specialization}`, margin + doc.getTextWidth(edu.degree) + 1, y);
    }
    y += 6;
  });

  // Save the PDF
  doc.save(`${cvData.personal.displayName.replace(/\s+/g, "_")}_CV.pdf`);
};
