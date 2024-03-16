import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GramerlyIcon } from "@/components/assets/icons/GramerlyIcon";
import { convertFormat } from "@/utils/convertFormat";

export const ReviewList = () => {
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
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
        >
          <GramerlyIcon />
        </Stack>

        <Text fontSize={"18px"} color={"black"} fontWeight={700}>
          Insurance HireHappy
        </Text>
      </HStack>
      <Stack gap={4}>
        <HStack justify={'space-between'}>
          <Text
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
            fontWeight={700}
            fontSize={'16px'}
          >
            Unemployment cover
          </Text>
          <Text   fontWeight={700}
            fontSize={'24px'}>£35,000</Text>
        </HStack>
        <HStack justify={'space-between'}>
          <Text
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
            fontWeight={700}
            fontSize={'16px'}
          >
            Estimate APY 4.12% Monthly
          </Text>
          <Text   fontWeight={700}
            fontSize={'24px'}>£1442</Text>
        </HStack>
        <HStack justify={'space-between'}>
          <Text   fontWeight={700}
            fontSize={'16px'}>Pool Insurance company </Text>
          <Text  bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
            fontWeight={700}
            fontSize={'16px'}>
            {convertFormat("0xf3789C63EA8856F57EfF0D346Acf5a6F5acD0cDE")}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
