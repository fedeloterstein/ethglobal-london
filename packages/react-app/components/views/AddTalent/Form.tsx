import {
  Button,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { PeopleIcon } from "@/components/assets/icons/PeopleIcon";

import { useState } from "react";
import { CheckIcon } from "@/components/assets/icons/CheckIcon";

export const Form = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    title: "",
    walletContractor: "",
    currency: "",
    amount: "",
    payment: "",
    scopeOfWork: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes hacer lo que quieras con los datos del formulario,
    // como enviarlos a través de una solicitud HTTP.
    console.log(formData);
  };

  const isFormDataEmpty = Object.values(formData).some((value) => value === "");

  return (
    <form onSubmit={handleSubmit}>
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
            <PeopleIcon />
          </Stack>

          <Text fontSize={"18px"} color={"black"} fontWeight={700}>
            Role details
          </Text>
        </HStack>
        <Stack gap={4}>
          <Input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <Input
            name="walletContractor"
            value={formData.walletContractor}
            onChange={handleInputChange}
            placeholder="Wallet Contractor*"
          />
          <HStack>
            <Select
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              placeholder="USDC"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Input
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Amount"
            />
          </HStack>
          <Select
            name="payment"
            value={formData.payment}
            onChange={handleInputChange}
            placeholder="Payment Monthly"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Textarea
            name="scopeOfWork"
            value={formData.scopeOfWork}
            onChange={handleInputChange}
            placeholder="Scope of Work"
          />
        </Stack>
        {!isFormDataEmpty && (
          <Button
            leftIcon={<CheckIcon />}
            variant="solid"
            borderRadius={"100px"}
            color={"white"}
            background={"black"}
            href={{
              pathname: "/dashboard/new/benefits",
              query: formData,
            }}
            as={Link}
          >
           Next
          </Button>
        )}
      </Stack>
    </form>
  );
};
