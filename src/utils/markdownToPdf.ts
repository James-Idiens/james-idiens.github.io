// utils/pdfUtils.ts
import MarkdownIt from "markdown-it";
import html2PDF from "jspdf-html2canvas";

// Exported function to convert <main> element to PDF
export function convertMainToPdf() {
  // Get the <main> element from the document
  const main = document.querySelector("main");
  console.log(main);
  // Use html2PDF to convert the <main> element to PDF
  if (main) {
    html2PDF(main, {
      jsPDF: {
        format: "a4",
      },
      imageType: "image/jpeg",
      output: "./pdf/generate.pdf",
      html2canvas: {
        useCORS: true, // Add this line
      },
    });
  }
}

// Initialize markdown parser
const md = new MarkdownIt();

// Function to convert markdown to PDF
export async function markdownToPdf(markdown: string) {
  // Convert markdown to HTML
  const html = md.render(markdown);

  // adjust the relative path of the images
  const realtiveHtml = html.replace(
    /src="\.\.\/\.\.\/\.\.\/assets\//g,
    'src="/src/assets/'
  );

  // Create a temporary div element
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = realtiveHtml;

  // Append tempDiv to the document
  document.body.appendChild(tempDiv);
  console.log(tempDiv);

  // Convert HTML to PDF using html2PDF
  await html2PDF(tempDiv, {
    // Pass the div element instead of the string
    jsPDF: {
      format: "a4",
    },
    imageType: "image/jpeg",
    output: "./pdf/generate.pdf",
    html2canvas: {
      useCORS: true, // Add this line
    },
  });
}

// Function to fetch markdown and convert to PDF
export async function fetchAndConvertToPdf(url: string) {
  // Fetch the markdown content
  const response = await fetch(url);
  let markdown = await response.text();
  console.log(markdown);

  // Remove frontmatter
  markdown = markdown.replace(/---[\s\S]*?---/, "");

  // Convert markdown to PDF
  markdownToPdf(markdown);
}

// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import MarkdownIt from "markdown-it";

// // Initialize markdown parser
// const md = new MarkdownIt();

// // Function to convert markdown to PDF
// export async function markdownToPdf(markdown: string) {
//   // Convert markdown to HTML
//   const html = md.render(markdown);

//   // Convert HTML to canvas using html2canvas
//   const canvas = await html2canvas(document.body);

//   // Create a new jsPDF instance
//   const doc = new jsPDF();

//   // Add canvas to PDF
//   doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);

//   // Save the PDF
//   doc.save("download.pdf");
// }

// // Function to fetch markdown and convert to PDF
// export async function fetchAndConvertToPdf(url: string) {
//   // Fetch the markdown content
//   const response = await fetch(url);
//   let markdown = await response.text();

//   // Remove frontmatter
//   markdown = markdown.replace(/---[\s\S]*?---/, '');

//   // Convert markdown to PDF
//   await markdownToPdf(markdown);
// }
