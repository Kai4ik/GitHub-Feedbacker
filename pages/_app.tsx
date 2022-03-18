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
  textStyles: {
    tag: {
      fontWeight: 700,
      fontSize: "1rem",
    },
    inputLabel: {
      "font-weight": "500",
      color: "gray.600",
    },
  },
  layerStyles: {
    leftBase: {
      bg: "#fff",
      borderRadius: "6px",
      color: "#3182CE",
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
