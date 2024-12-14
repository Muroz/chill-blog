import { ImgHTMLAttributes, SourceHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sources: SourceHTMLAttributes<HTMLSourceElement>[];
  src: string;
  alt: string;
}

// https://nextjs.org/docs/pages/building-your-application/optimizing/images
export function Image({ sources = [], alt, ...props }: ImageProps) {
  return (
    <picture>
      {sources.map((source) => (
        <source key={source.srcSet} {...source} />
      ))}
      <img alt={alt} {...props} />
    </picture>
  );
}
