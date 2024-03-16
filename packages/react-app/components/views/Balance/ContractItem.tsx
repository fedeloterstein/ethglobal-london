import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const ContractItem = ({title, days, usd}: any) => {
  return (
    <HStack justify={"space-between"}>
      <HStack>
        <Image alt="" src={"/coins/usdc.png"} width={40} height={40} />
        <Stack>
          <Text fontWeight={700} fontSize={'12px'} color={'black'}>{title}</Text>
          <Text fontWeight={400} fontSize={'12px'} color={'gray'}>Payment on {days} days -  {usd} usd</Text>
        </Stack>
      </HStack>
    <HStack>
    <Image alt="" src={"/buttons/red.png"} width={40} height={40} />
    <Image alt="" src={"/buttons/green.png"} width={40} height={40} />
    </HStack>
    </HStack>
  );
};
