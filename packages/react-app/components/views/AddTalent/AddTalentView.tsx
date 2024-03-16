import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Form } from "./Form";

export const AddTalentView = () => {
  return (
    <Stack alignItems={"center"} w={"100%"}>
      <Stack justify={"center"} pt={10} pb={10} textAlign={"center"}>
        <Heading fontWeight={700} fontSize={"24px"} color={"black"}>
          🤓 Add Talent
        </Heading>
        <Text fontWeight={400} fontSize={"14px"} color={"black"}>
          Create a contract for independent is easy with our streamlined
          process.
        </Text>
      </Stack>
      <Form />
    </Stack>
  );
};
