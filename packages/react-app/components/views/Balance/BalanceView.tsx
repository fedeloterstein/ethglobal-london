import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { ContractList } from "./ContractList";

export const BalanceView = ({ data }: any) => {
  return (
    <Stack alignItems={"center"} w={"100%"}>
      <Stack justify={"center"} pt={10} pb={10}>
        <Heading fontWeight={700} fontSize={"24px"} color={"white"}>
          💸 Balance
        </Heading>
      </Stack>
      <ContractList data={data} />
    </Stack>
  );
};
