import { fetchCmsContent, getAuthHeaders } from "@/api";
import { CardGrid } from "@/components/CardGrid";
import { Article, StrapiResponse } from "@/types/cms/strapi";
import { Title } from "@mantine/core";

interface PageProps {
  params: {
    locale: string;
    category: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { locale, category } = await params;
  const urlParamsObject = {
    sort: { createdAt: "desc" },
    filters: {
      category: {
        slug: category,
      },
    },
    populate: {
      cover: { fields: ["url"] },
      category: {
        populate: "*",
      },
    },
  };

  const content: StrapiResponse<Article> = await fetchCmsContent(
    "/articles",
    urlParamsObject,
    getAuthHeaders()
  );

  return (
    <>
      <Title order={1}>{category.toUpperCase()}</Title>
      <CardGrid content={content?.data} locale={locale} />
    </>
  );
};

export default Page;
