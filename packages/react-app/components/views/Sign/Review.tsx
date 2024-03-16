import { ContractIcon } from "@/components/assets/icons/ContractIcon";
import { convertFormat } from "@/utils/convertFormat";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Review = ({form}: any) => {
  return (
    <Stack
      background={"white"}
      opacity={"90%"}
      w={"100%"}

      p={8}
      borderRadius={"14px"}
      border={`2px solid var(--Line-gradient, rgba(120, 40, 200, 0.27))`}
      boxShadow="0px -66px 54px -70px #FFF inset"
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
         {form.title}
        </Text>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
          }
          fontWeight={700}
          fontSize={"16px"}
        >
          Wallet Contractor
        </Text>
        <Text fontWeight={700} fontSize={"24px"}>
          {" "}
          {convertFormat(form.walletContractor)}
        </Text>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
          }
          fontWeight={700}
          fontSize={"16px"}
        >
          Unemployment cover
        </Text>
        <Text fontWeight={700} fontSize={"24px"}>
          {form.amount}
        </Text>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
          }
          fontWeight={700}
          fontSize={"16px"}
        >
          Estimate APY 4.12% Monthly
        </Text>
      </HStack>

      <Text
        bgClip="text"
        bgGradient={
          "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
        }
        fontWeight={700}
        fontSize={"16px"}
      >
        Scope of Work
      </Text>
      <Text>
       {form.scopeOfWork}
      </Text>
      <Text
        bgClip="text"
        bgGradient={
          "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
        }
        fontWeight={700}
        fontSize={"16px"}
      >
        Benefits
      </Text>
      <HStack>
      <Image alt="" src={'/coins/Avatar.png'} width={65} height={65} />
      <Image alt="" src={'/coins/sport.png'} width={65} height={65} />
      <Image alt="" src={'/coins/teraphy.png'} width={65} height={65} />
      <Image alt="" src={'/coins/donation.png'} width={65} height={65} />
      </HStack>
    </Stack>
  );
};
