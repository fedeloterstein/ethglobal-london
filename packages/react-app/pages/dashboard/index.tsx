import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Heading, Stack } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Layout>
      <Stack>
        <Header />
        <Heading>Dash</Heading>
      </Stack>
    </Layout>
  );
}
