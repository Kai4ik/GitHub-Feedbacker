import {
  Flex,
  Text,
  Heading,
  Spacer,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChatIcon } from "@chakra-ui/icons";

const Suggestion = ({ data }) => {
  return (
    <Flex bg="#fff" mt="2vh" borderRadius="6px" p="1rem ">
      <Flex
        direction="column"
        bg="#EDF2F7"
        borderRadius="6px"
        w="30px"
        h="36px"
        justify="center"
        align="center"
      >
        <ChevronUpIcon fontSize="12px" color="#3182CE" />
        <Text fontSize="0.5rem" fontWeight="700" color="#373E68">
          {data.upvotes}
        </Text>
      </Flex>
      <Flex direction="column" m="2px 4%" gridGap="2px">
        <Heading
          as="h4"
          fontSize="0.6rem"
          color="#373E68"
          textTransform="capitalize"
        >
          {data.title}
        </Heading>
        <Text fontSize="0.6rem">{data.description}</Text>
        <Tag
          fontSize="0.5rem"
          fontWeight="700"
          textTransform="capitalize"
          color="#3182CE"
          size="sm"
          mt="4px"
        >
          {data.category}
        </Tag>
      </Flex>
      <Spacer />
      <Tag bg="transparent" height="50%" m="auto" color="#373E68">
        <TagLeftIcon boxSize="10px" as={ChatIcon} mt="2px" />
        <TagLabel fontWeight="700" fontSize="10px">
          {data.comments}
        </TagLabel>
      </Tag>
    </Flex>
  );
};

export default Suggestion;
