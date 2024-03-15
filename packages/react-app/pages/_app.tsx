import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThirdwebProvider
        activeChain="ethereum"
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </Layout>
  );
}

export default App;
