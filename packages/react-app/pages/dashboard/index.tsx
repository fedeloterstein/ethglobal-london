import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { BalanceView } from "@/components/views/Balance/BalanceView";
import { MAIN_CONTRACT } from "@/constants/address";
import {  Stack } from "@chakra-ui/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Dashboard() {
  const { contract } = useContract("0x24D1a0b3ECeEaD311d01a122DE67cF7C9c6fa149");
  const { data } = useContractRead(contract, "getEmployees", [])

  return (
    <Layout>
      <Stack h={'100vh'}>
        <Header />
        <BalanceView data={data} />
      </Stack>
    </Layout>
  );
}
