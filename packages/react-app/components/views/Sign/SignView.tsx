import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { CheckIcon } from "@/components/assets/icons/CheckIcon";
import Link from "next/link";
import { Review } from "./Review";
import { Web3Button, useContract } from "@thirdweb-dev/react";
import { parseEther } from "viem";


const tokenAddress = "0x9Fa56e2A9d7563246f2FB898B9f10C9cf41661C1";


export const SignView = ({ form }: any) => {

  const { contract: tokenContract, isLoading: tokenContractLoding } =
useContract(tokenAddress, "token");

  return (
    <Stack alignItems={"center"} w={"100%"} gap={8} pb={10}>
      <Stack justify={"center"} pt={10} pb={10} textAlign={"center"}>
        <Heading fontWeight={700} fontSize={"24px"} color={"black"}>
          ✍️ Review and Sign
        </Heading>
        <Text fontWeight={400} fontSize={"14px"} color={"black"}>
          You are one step away from finalizing your agreement to start hiring
          happy.
        </Text>
      </Stack>
      <Review form={form} />
      <Web3Button
        contractAddress="0x09B75C0bf6136B61131FC92c2eC7193E4aB89987"
        action={async (contract) => {
          await tokenContract?.setAllowance(
            "0x09B75C0bf6136B61131FC92c2eC7193E4aB89987",
            1
          );
          
          await contract.call("registerEmployee", ['0xf3789C63EA8856F57EfF0D346Acf5a6F5acD0cDE', parseEther('1'), 'juan']);
        }}
      >
      Sign Contract
      </Web3Button>
    </Stack>
  );
};
