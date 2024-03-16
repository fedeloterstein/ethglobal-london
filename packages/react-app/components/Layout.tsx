import { Container } from "@chakra-ui/react";
import React from "react";

export const Layout = ({ children, props }: any) => {
  return <Container maxW="container.sm"  {...props}>{children}</Container>;
};
