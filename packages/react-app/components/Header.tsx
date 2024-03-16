import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IconLogo } from "./assets/icons/IconLogo";
import { GramerlyIcon } from "./assets/icons/GramerlyIcon";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { convertFormat } from "@/utils/convertFormat";

export const Header = () => {
  const address = useAddress();

  return (
    <HStack p={4} justify={"space-between"}>
      <IconLogo />
      {address ? (
        <HStack>
          <GramerlyIcon />
          <Text fontSize={"12px"} color={"white"}>
            {convertFormat(address)}
          </Text>{" "}
        </HStack>
      ) : (
        <ConnectWallet />
      )}
    </HStack>
  );
};
