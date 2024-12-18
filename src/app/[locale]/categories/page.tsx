import { fetchCmsContent, getAuthHeaders } from "@/api";
// import { CardGrid } from "@/components/CardGrid";
import { Article, StrapiResponse } from "@/types/cms/strapi";

// interface PageProps {
//   params: {
//     locale: string;
//   };
// }

const Page = async () => {
//   const { locale } = await params;
  const urlParamsObject = {
    sort: { createdAt: "desc" },
    populate: {
      //   cover: { fields: ["url"] },
      articles: {
        populate: "*",
      },
    },
  };

  const content: StrapiResponse<Article> = await fetchCmsContent(
    "/categories",
    urlParamsObject,
    getAuthHeaders()
  );

  console.log(content);
  return (
    <div>
      {content?.data.map((category) => {
        return <div key={category.id}>{category.title}</div>;
      })}
    </div>
  );
};

export default Page;
