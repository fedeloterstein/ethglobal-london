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
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { MAIN_CONTRACT, coinsMap } from "@/constants/address";
import { useRouter } from "next/router";
import { parseEther } from "viem";

export const Form = () => {
  const { contract } = useContract(MAIN_CONTRACT);
  const { data, isLoading } = useContractRead(contract, "getActiveTokens", []);
  console.log("address", data);

  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    title: "",
    walletContractor: "",
    currency: "",
    amount: "1",
  });

  const router = useRouter();
  const { contract: tokenContract } = useContract(formData.currency, "token");

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
            bgGradient={"linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"}
          >
            <PeopleIcon />
          </Stack>

          <Text fontSize={"18px"} color={"black"} fontWeight={700}>
          Contractor Details
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
              placeholder={"Token"}
            >
              {data?.map((a: string, index: any) => (
                <option value={a} key={index}>
                  {coinsMap[a] as any}
                </option>
              ))}
            </Select>
            <Input
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Amount"
            />
          </HStack>
          <Input
            name="ee"
            onChange={handleInputChange}
            placeholder="Days to payment"
          />
        </Stack>
        {!isFormDataEmpty && (
          <Web3Button
            contractAddress={MAIN_CONTRACT}
            action={async (contract) => {
              await tokenContract?.setAllowance(MAIN_CONTRACT, 1);

              await contract.call("registerEmployee", [
                "0xf3789C63EA8856F57EfF0D346Acf5a6F5acD0cDE",
                parseEther("1"),
                "juan",
                formData.currency,
                "data",
              ]);
            }}
            onSuccess={() => router.push("/congrats")}
          >
           Create Contract
          </Web3Button>
        )}
      </Stack>
    </form>
  );
};
