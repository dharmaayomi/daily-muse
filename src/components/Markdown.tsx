import { Children, FC } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}

const Markdown: FC<MarkdownProps> = ({ content }) => {
  const renderers: Components = {
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mb-2">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-base font-light mb-4 text-justify">{children}</p>
    ),
    li: ({ children }) => (
      <li className="text-base font-light list-disc ml-6">{children}</li>
    ),
    ul: ({ children }) => (
      <ul className="text-base font-light list-disc ml-4">{children}</ul>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
  };

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={renderers}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
