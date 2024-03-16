import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Form } from "./Form";

export const AddTalentView = () => {
  return (
    <Stack alignItems={"center"} w={"100%"} h={'100vh'}>
      <Stack justify={"center"} pt={10} pb={10} textAlign={"center"}>
        <Heading fontWeight={700} fontSize={"24px"} color={"white"}>
          🤓 Add Work
        </Heading>
        <Text fontWeight={400} fontSize={"14px"} color={"white"}>
          Create a contract for independent is easy with our streamlined
          process.
        </Text>
      </Stack>
      <Form />
    </Stack>
  );
};
