import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { BenefitsView } from "@/components/views/Benefits/BenefitsView";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Benefits() {
    const router = useRouter()
    console.log(router.query);

  return (
    <Layout>
      <Stack>
        <Header />
        <BenefitsView form={router.query} />
      </Stack>
    </Layout>
  );
}
