import { fetchCmsContent, getAuthHeaders } from "@/api";
import { CardGrid } from "@/components/CardGrid";
import { Article, StrapiResponse } from "@/types/cms/strapi";

interface PageProps {
  params: {
    locale: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { locale } = await params;
  const urlParamsObject = {
    sort: { createdAt: "desc" },
    pagination: {
      pageSize: 8,
      page: 1,
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

  return <CardGrid content={content?.data} locale={locale} />;
};

export default Page;
