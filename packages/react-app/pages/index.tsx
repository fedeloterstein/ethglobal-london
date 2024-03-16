import React from "react";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { LogoHome } from "@/components/assets/icons/LogoHome";
import Image from "next/image";
import { GramerlyIcon } from "@/components/assets/icons/GramerlyIcon";
import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack w={"100%"} height={"100vh"} alignItems={"center"} gap={8} mt={8}>
        <LogoHome />
        <Stack>
          <Heading fontSize={"36px"} fontWeight={700} color={'white'}>
            🤝 Welcome to{" "}
          </Heading>
          <Heading
            fontSize={"36px"}
            fontWeight={700}
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, #BD36CD 0.58%, #00CBFE 99.87%)"
            }
          >
            Revolution hiring
          </Heading>
        </Stack>
        <Image alt="" src={"/images/imgLanding.png"} width={375} height={342} />
        <Button as={Link} href={'/dashboard'} leftIcon={<GramerlyIcon />}  variant="solid" borderRadius={'100px'} color={'black'} background={'white'}>
          Unlock Fair Hiring
        </Button>
      </Stack>
    </Layout>
  );
}
