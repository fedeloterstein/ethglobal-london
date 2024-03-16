import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { SignView } from "@/components/views/Sign/SignView";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Sign() {
  const router = useRouter();

  return (
    <Layout>
      <Stack>
        <Header />
        <SignView form={router.query} />
      </Stack>
    </Layout>
  );
}
