import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CeloAlfajoresTestnet, AuroraTestnet, ArbitrumSepolia } from "@thirdweb-dev/chains";
import { ChakraProvider, Stack } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider
        activeChain={ArbitrumSepolia}
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      >
        <Stack background={'black'} h={'100%'}>

        <Component {...pageProps} />
        </Stack>
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default App;
