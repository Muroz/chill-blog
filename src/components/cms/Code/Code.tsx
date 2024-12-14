interface CodeProps {
  code: string;
  language: string;
}

export function Code({ code, language }: CodeProps) {
  return (
    <pre role="region" aria-label={`Code snippet in ${language}`}>
      <code>{code}</code>
    </pre>
  );
}
