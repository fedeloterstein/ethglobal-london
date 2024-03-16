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
      <Stack w={"100%"} height={"100vh"} alignItems={"center"} gap={8} mt={8}>
        <LogoHome />

        <Image alt="" src={"/images/congrants.png"} width={375} height={342} />

        <Stack>
          <Heading fontSize={"36px"} fontWeight={700} color={'white'} alignSelf={'center'}>
            🤝 
          </Heading>
          <Heading
            fontSize={"36px"}
            fontWeight={700}
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
            }
          >
         You make it
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
     Great!
        </Button>
      </Stack>
    </Layout>
  );
}
