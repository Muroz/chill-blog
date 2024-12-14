import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  content: string;
}

export function RichText({ content }: RichTextProps) {
  return (
    <section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>
  );
}
