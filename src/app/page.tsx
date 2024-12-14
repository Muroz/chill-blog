import styles from "./page.module.css";
import { Title } from "@mantine/core";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title order={1}>Chill Blog</Title>
      </main>
    </div>
  );
}
