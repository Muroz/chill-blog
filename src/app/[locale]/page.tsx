import { fetchCmsContent, getAuthHeaders } from "@/api";
import { CardGrid } from "@/components/CardGrid";
import { Article, StrapiResponse } from "@/types/cms/strapi";
import { Center, Title } from "@mantine/core";

interface PageProps {
  params: {
    locale: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { locale } = await params;
  // const urlParamsObject = {
  //   sort: { createdAt: "desc" },
  //   populate: {
  //     cover: { fields: ["url"] },
  //     category: {
  //       populate: "*",
  //     },
  //   },
  // };

  // const content: StrapiResponse<Article> = await fetchCmsContent(
  //   "/articles",
  //   urlParamsObject,
  //   getAuthHeaders()
  // );

  // if (content) {
  //   return <CardGrid content={content?.data} locale={locale} />;
  // }

  return (
    <Center style={{ flexGrow: "1" }}>
      <Title>Coming Soon!</Title>
    </Center>
  );
};

export default Page;
