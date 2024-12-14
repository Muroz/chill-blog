export interface QuoteProps {
  content: string;
  author: string;
}

export function Quote({ content, author }: QuoteProps) {
  return (
    <figure>
      <blockquote>{content}</blockquote>
      <figcaption>
        -<cite>{author}</cite>
      </figcaption>
    </figure>
  );
}
