import { Container } from "@chakra-ui/react";
import React from "react";

export const Layout = ({ children }: any) => {
  return <Container maxW="container.sm" background={'black'} >{children}</Container>;
};
