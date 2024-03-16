import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const ContractItem = () => {
  return (
    <HStack justify={"space-between"}>
      <HStack>
        <Image alt="" src={"/coins/usdc.png"} width={40} height={40} />
        <Stack>
          <Text fontWeight={700} fontSize={'12px'} color={'black'}>QA Engennier</Text>
          <Text fontWeight={400} fontSize={'12px'} color={'gray'}>Payment on 1 day</Text>
        </Stack>
      </HStack>
      <Stack >
        <Text  fontWeight={700} fontSize={'12px'} color={'black'}>£35,000</Text>
        <Stack background={'#7ECE18'} p={1} borderRadius={'9px'} justify={'center'} align={'center'}>
          <Text color={'white'} fontSize={'8px'} fontWeight={500}>ACTIVE</Text>
        </Stack>
      </Stack>
    </HStack>
  );
};
