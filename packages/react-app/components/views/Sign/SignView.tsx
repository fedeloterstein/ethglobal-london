import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { CheckIcon } from "@/components/assets/icons/CheckIcon";
import Link from "next/link";

export const SignView = ({ form }: any) => {
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

      <Button
        leftIcon={<CheckIcon />}
        variant="solid"
        borderRadius={"100px"}
        color={"white"}
        background={"black"}
        href={{
          pathname: "/dashboard/new/benefits/sign",
          query: form,
        }}
        as={Link}
      >
        Next
      </Button>
    </Stack>
  );
};
