import { ContractIcon } from "@/components/assets/icons/ContractIcon";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ContractItem } from "./ContractItem";
import Link from "next/link";
import { AddIcon } from "@/components/assets/icons/AddIcon";

export const ContractList = ({data}: any) => {
  console.log('empleos', data);
  
  return (
    <Stack
      background={"white"}
      opacity={"90%"}
      w={"100%"}
      h={"100%"}
      p={8}
      borderRadius={"14px"}
      border={`2px solid var(--Line-gradient, rgba(120, 40, 200, 0.27))`}
      boxShadow="0px -66px 54px -70px #FFF inset"
      gap={10}
    >
      <HStack>
        <Stack
          h={"40px"}
          w={"40px"}
          borderRadius={"100px"}
          align={"center"}
          justify={"center"}
          bgGradient={
            "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
          }
        >
          <ContractIcon />
        </Stack>

        <Text fontSize={"18px"} color={"black"} fontWeight={700}>
          Contracts
        </Text>
      </HStack>
      <Stack gap={4}>
        <ContractItem />
        <ContractItem />
        <ContractItem />
      </Stack>
      <Button
        as={Link}
        href={"/dashboard/new"}
        leftIcon={<AddIcon />}
        variant="solid"
        borderRadius={"100px"}
        color={"white"}
        background={"black"}
      >
        Add New Contract
      </Button>
    </Stack>
  );
};
