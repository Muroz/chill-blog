import { fetchCmsContent, getAuthHeaders } from "@/api";
import { Article, StrapiResponse } from "@/types/cms/strapi";
import { renderBlock } from "@/utils/renderer";
import { Title } from "@mantine/core";

interface PageProps {
  params: Promise<{
    locale: string;
    article: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { article } = await params;
  const urlParamsObject = {
    sort: { createdAt: "desc" },
    filters: {
      slug: article,
    },
    populate: {
      cover: { fields: ["url"] },
      category: {
        populate: "*",
      },
      blocks: {
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
      {content?.data &&
        content?.data.map((article) => {
          console.log(article);
          return (
            <div key={article.id}>
              <Title order={1}>{article.title}</Title>
              {article.blocks.map((block) => {
                return renderBlock(block, block.id);
              })}
            </div>
          );
        })}
    </>
  );
};

export default Page;
