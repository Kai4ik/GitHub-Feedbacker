import {
  Flex,
  Text,
  Heading,
  Spacer,
  Tag,
  TagLeftIcon,
  TagLabel,
  Avatar,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChatIcon } from "@chakra-ui/icons";
import { isWebUri } from "valid-url";

const Suggestion = ({ data }) => {
  return (
    <Flex bg="white" mt="2vh" borderRadius="6px" p="2rem" color="gray.600">
      <Flex
        direction="column"
        bg="gray.100"
        borderRadius="6px"
        w="50px"
        h="60px"
        justify="center"
        align="center"
      >
        <ChevronUpIcon fontSize="20px" color="blue.500" />
        <Text textStyle="tag">{data.upvotes}</Text>
      </Flex>
      <Flex
        direction="column"
        m="2px 4%"
        gridGap="2px"
        fontSize="1.2rem"
        maxW="70%"
      >
        <Heading as="h6" size="md" textTransform="capitalize">
          {data.title}
        </Heading>
        <Text>{data.description}</Text>
        <Tag
          textStyle="tag"
          textTransform="capitalize"
          color="blue.500"
          size="lg"
          mt="4px"
          width="fit-content"
        >
          <TagLabel> {data.category} </TagLabel>
        </Tag>
        <Flex align="center" gridGap={3} mt={3}>
          <Text textStyle="tag">Created by:</Text>
          <Flex gridGap={1}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="xs"
            />
            <Text>kai4ik</Text>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
      <Tag bg="transparent" height="50%" m="auto" color="gray.600">
        <TagLeftIcon boxSize="20px" as={ChatIcon} mt="2px" />
        <TagLabel fontWeight="700" fontSize="18px">
          {data.comments.length}
        </TagLabel>
      </Tag>
    </Flex>
  );
};

export default Suggestion;
