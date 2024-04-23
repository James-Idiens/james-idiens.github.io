import MarkdownIt from "markdown-it";

// Function to open markdown file in a new tab and trigger print dialog
export async function printMarkdown(url: string): Promise<void> {
  // Fetch the markdown file
  const response = await fetch(url);
  let markdown = await response.text();
  // Extract the title from the frontmatter
  const titleMatch = markdown.match(/title: (.*)/);
  const title = titleMatch ? `# ${titleMatch[1]}` : "";

  // Remove the entire frontmatter and replace it with the title
  markdown = markdown.replace(/---[\s\S]*?---/, title);
  console.log(markdown);
  // Replace relative image paths with absolute paths
  const baseUrl = window.location.origin;
  markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
    // Remove the ../ parts from the path
    const fixedSrc = src.replace(/(\.\.\/)/g, '');
    return `![${alt}](${baseUrl}/src/${fixedSrc})`;
  });

  // Convert markdown file to html using markdown-it
  const md = new MarkdownIt();
  let html = md.render(markdown);


  // Create a new Blob object from the HTML string
  const blob = new Blob([html], { type: "text/html" });

  // Create an object URL for the Blob
  const blobUrl = URL.createObjectURL(blob);

  // Open the markdown file in a new tab
  const win = window.open(blobUrl, "_blank");

  // Check if the new window was successfully opened
  if (win) {
    // Wait for the new window to load
    win.onload = function () {
      // Try to trigger the print dialog
      try {
        win.print();
      } catch (e) {
        console.error("Failed to trigger print dialog:", e);
      }
    };
  } else {
    console.error("Failed to open window");
  }
}
