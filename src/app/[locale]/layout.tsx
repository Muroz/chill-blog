import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import { Center } from "@mantine/core";

interface Params {
  locale: string;
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  return (
    <>
      <Header locale={locale} />
      <Page>{children}</Page>
      <footer>
        <Center>
          Chill Dev - All Rights Reserved
        </Center>
      </footer>
    </>
  );
}
