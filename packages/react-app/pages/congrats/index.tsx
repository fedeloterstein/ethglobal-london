import { Layout } from "@/components/Layout";
import { GramerlyIcon } from "@/components/assets/icons/GramerlyIcon";
import { LogoHome } from "@/components/assets/icons/LogoHome";
import { Button, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Congrats() {
  return (
    <Layout>
      <Stack w={"100%"} height={"100%"} alignItems={"center"} gap={8} mt={8}>
        <LogoHome />

        <Image alt="" src={"/images/congrants.png"} width={375} height={342} />

        <Stack>
          <Heading fontSize={"36px"} fontWeight={700}>
            🤝 Thanks for build a
          </Heading>
          <Heading
            fontSize={"36px"}
            fontWeight={700}
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
          >
            Fair & Better World
          </Heading>
        </Stack>
        <Button
          as={Link}
          href={"/dashboard"}
          leftIcon={<GramerlyIcon />}
          variant="solid"
          borderRadius={"100px"}
          color={"white"}
          background={"black"}
        >
          I´m Hired Happy
        </Button>
      </Stack>
    </Layout>
  );
}
