import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export function Media({ src, alt }: ImageProps) {
  return (
    <Image src={src} alt={alt || "none provided"} width={400} height={400} />
  );
}