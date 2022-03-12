import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = {
  styles: {
    global: {
      "html, body": {
        fontFamily: "Lato, sans-serif",
      },
      label: {
        marginBottom: "2px !important",
      },
    },
  },
};

const customTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
