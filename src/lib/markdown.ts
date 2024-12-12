import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

/**
 * Reads and converts a Markdown file to HTML.
 * Server-side only.
 * @param filePath Relative path to the Markdown file.
 * @returns The HTML content as a string.
 */
export async function getMarkdownContent(filePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}
