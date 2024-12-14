import { Divider, Flex } from "@mantine/core";
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Header({ locale }: { locale: string }) {
  return (
    <Flex pos={"sticky"} top={0} left={0} direction="column" component="nav">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        pl="xl"
        pr="xl"
      >
        <Image src={logo} alt="Logo" width={100} height={100} />
        <Flex gap="xl">
          {/* <div>search</div>
          <Anchor href={`/${locale}/categories`} component={Link}>
            Categories
          </Anchor> */}
          {/* <Anchor href={`/${locale}/posts`} component={Link}>
            Posts
          </Anchor> */}
        </Flex>
      </Flex>
      <Divider />
    </Flex>
  );
}
