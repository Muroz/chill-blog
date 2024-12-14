import { PostCard } from "@/components/PostCard";
import { Article } from "@/types/cms/strapi";
import { Grid, GridCol, Anchor, Flex } from "@mantine/core";

export function CardGrid({
  content,
  locale,
}: {
  content: Array<Article>;
  locale: string;
}) {
  return (
    <Flex direction="column" gap="xl">
      <Grid justify="space-between">
        {content &&
          content.map((article) => {
            return (
              <GridCol span={{ base: 12, md: 6, lg: 4 }} key={article.id}>
                <Anchor
                  href={`/${locale}/posts/${article.category.slug}/${article.slug}`}
                >
                  <PostCard article={article} />
                </Anchor>
              </GridCol>
            );
          })}
      </Grid>
    </Flex>
  );
}
