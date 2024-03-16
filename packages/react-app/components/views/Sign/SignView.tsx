import {  Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Review } from "./Review";
import { Web3Button, useContract } from "@thirdweb-dev/react";
import { parseEther } from "viem";
import { MAIN_CONTRACT } from "@/constants/address";
import { useRouter } from "next/router";



const tokenAddress = "0x9Fa56e2A9d7563246f2FB898B9f10C9cf41661C1";


export const SignView = ({ form }: any) => {
  const router = useRouter()
  const { contract: tokenContract} =
useContract(form.currency, "token");

  return (
    <Stack alignItems={"center"} w={"100%"} h={'100vh'} gap={8} pb={10}>
      <Stack justify={"center"} pt={10} pb={10} textAlign={"center"}>
        <Heading fontWeight={700} fontSize={"24px"} color={"white"}>
          ✍️ Review and Sign
        </Heading>
        <Text fontWeight={400} fontSize={"14px"} color={"white"}>
          You are one step away from finalizing your agreement to start hiring
          happy.
        </Text>
      </Stack>
      <Review form={form} />
      <Web3Button
        contractAddress={MAIN_CONTRACT}
        action={async (contract) => {
          await tokenContract?.setAllowance(
            MAIN_CONTRACT,
            1
          );
          
          await contract.call("registerEmployee", ['0xf3789C63EA8856F57EfF0D346Acf5a6F5acD0cDE', parseEther('1'), 'juan', form.currency, form.scopeOfWork]);
        }}
        onSuccess={() => router.push('/congrats')}
      >
      Sign Contract
      </Web3Button>
    </Stack>
  );
};
