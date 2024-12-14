import { Card, Image, Text, Badge, Group, CardSection } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PostCard({ article}: any) {
  const imgBaseUrl = "http://localhost:1337";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image
          src={imgBaseUrl + article?.cover?.url}
          alt={article.title}
          height={200}
        />
      </CardSection>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{article.title}</Text>
        <Badge color="blue">{article.category.slug}</Badge>
      </Group>
      <Text size="sm" c="dimmed">
        {article.description}
      </Text>
    </Card>
  );
};
