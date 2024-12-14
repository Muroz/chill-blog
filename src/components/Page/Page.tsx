import React, { PropsWithChildren } from "react";
import { Flex } from "@mantine/core";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex component="main" mih="80dvh" direction="column" p="xl">
      {children}
    </Flex>
  );
};
