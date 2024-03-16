import React from "react";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { LogoHome } from "@/components/assets/icons/LogoHome";
import Image from "next/image";
import { GramerlyIcon } from "@/components/assets/icons/GramerlyIcon";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW="container.sm">
      <Stack w={"100%"} height={"100%"} alignItems={"center"} gap={8} mt={8}>
        <LogoHome />
        <Stack>
          <Heading fontSize={"36px"} fontWeight={700}>
            🤝 Welcome to{" "}
          </Heading>
          <Heading
            fontSize={"36px"}
            fontWeight={700}
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
          >
            Revolution hiring
          </Heading>
        </Stack>
        <Image alt="" src={"/images/imgLanding.png"} width={375} height={342} />
        <Button as={Link} href={'/dashboard'} leftIcon={<GramerlyIcon />}  variant="solid" borderRadius={'100px'} color={'white'} background={'black'}>
          Unlock Fair Hiring
        </Button>
      </Stack>
    </Container>
  );
}
