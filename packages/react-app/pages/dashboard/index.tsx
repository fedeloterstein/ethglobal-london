import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { BalanceView } from "@/components/views/Balance/BalanceView";
import {  Stack } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Layout>
      <Stack>
        <Header />
        <BalanceView />
      </Stack>
    </Layout>
  );
}
