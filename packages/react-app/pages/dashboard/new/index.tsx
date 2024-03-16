import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { AddTalentView } from "@/components/views/AddTalent/AddTalentView";
import { Heading, Stack } from "@chakra-ui/react";
import React from 'react'

export default function Dashboard() {
  return (
    <Layout>
    <Stack >
      <Header />
      <AddTalentView />
    </Stack>
  </Layout>
  );
}
