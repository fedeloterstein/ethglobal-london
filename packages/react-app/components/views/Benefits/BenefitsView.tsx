import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ReviewList } from "./Review";
import { BenefitsCard } from "./BenefitsCard";
import { CheckIcon } from "@/components/assets/icons/CheckIcon";
import Link from "next/link";

export const BenefitsView = ({form}: any) => {
  return (
    <Stack alignItems={"center"} w={"100%"} gap={8} pb={10}>
      <Stack justify={"center"} pt={10} pb={10} textAlign={"center"}>
        <Heading fontWeight={700} fontSize={"24px"} color={"black"}>
          🌱 Empower Fair Hiring
        </Heading>
        <Text fontWeight={400} fontSize={"14px"} color={"black"}>
          We created a renewable unemployment insurance fund that generates
          benefits that prioritize employee wellbeing and social impact.
        </Text>
      </Stack>
      <ReviewList form={form} />
      <Text color={'black'} alignSelf={'start'} fontSize={'16px'} fontWeight={700}>Select Benefits</Text>
      <Stack w={'100%'}>
        <BenefitsCard imageOne={'/coins/celo.png'} imageTwo={'/coins/Avatar.png'} title={'Plant a tree'}/>
        <BenefitsCard imageOne={'/coins/chiliz.png'} imageTwo={'/coins/sport.png'} title={'Ticket Sport'}/>
        <BenefitsCard imageOne={'/coins/eth.png'} imageTwo={'/coins/teraphy.png'} title={'Therapy'}/>
        <BenefitsCard imageOne={'/coins/usdc.png'} imageTwo={'/coins/donation.png'} title={'Donation'}/>
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
