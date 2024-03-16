import { AddIcon } from "@/components/assets/icons/AddIcon";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const BenefitsCard = ({ imageOne, imageTwo, title }: any) => {
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
      <HStack w={"100%"} justify={"space-between"}>
        <HStack>
          <Image alt="" src={imageOne} width={40} height={40} />
          <Image alt="" src={imageTwo} width={40} height={40} />
          <Text color={"black"} fontWeight={700} fontSize={"18px"}>
           {title}
          </Text>
        </HStack>
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
          <AddIcon />
        </Stack>
      </HStack>
      <Text>
        Lorem Ipsum has been the industrys standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
    </Stack>
  );
};
