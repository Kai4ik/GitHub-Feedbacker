import type { NextPage } from "next";
import Head from "next/head";

import FilterTypes from "../components/filterTypes";
import Suggestions from "../components/suggestions";
import { Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg="gray.100" p="8vh 10vw" justify="space-between" minH="100vh">
        <Flex direction="column" w="28%">
          <FilterTypes />
        </Flex>
        <Flex direction="column" w="70%">
          <Suggestions />
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
