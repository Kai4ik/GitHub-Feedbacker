import {
  Flex,
  Tag,
  TagLabel,
  Select,
  Button,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FcIdea } from "react-icons/fc";

import Suggestion from "./suggestion";

const Suggestions = () => {
  const sortOptions: Array<string> = [
    "most upvotes",
    "least upvotes",
    "most comments",
    "least comments",
  ];

  const suggestions: {
    upvotes: number;
    title: string;
    description: string;
    category: string;
    comments: number;
  }[] = [
    {
      upvotes: 112,
      title: "add tags",
      description: "Easier to search for solution",
      category: "enhancement",
      comments: 2,
    },
    {
      upvotes: 98,
      title: "add dark theme",
      description: "Helps to dark mode",
      category: "feature",
      comments: 6,
    },
  ];

  return (
    <>
      <Flex
        bg="#373E68"
        borderRadius="6px"
        p="0.5rem 1rem"
        align="center"
        mb="12px"
      >
        <Tag fontSize="0.8rem" bg="transparent" color="#fff" mr="4%">
          <Icon as={FcIdea} />
          <TagLabel ml="6px">6 suggestions</TagLabel>
        </Tag>
        <Flex align="center" w="30%" fontWeight="600">
          <Text fontSize="0.6rem" color="#E8E8E8" mr="10px" w="50px">
            Sort by:
          </Text>
          <Select
            variant="unstyled"
            fontSize="0.6rem"
            iconSize="0.8rem"
            color="#fff"
            display="flex"
          >
            {sortOptions.map((element, index) => (
              <option
                key={index}
                value={element}
                style={{ background: "#373E68" }}
              >
                {element}
              </option>
            ))}
          </Select>
        </Flex>
        <Spacer />
        <Button
          size="xs"
          leftIcon={<AddIcon />}
          fontSize="7px"
          bg="#805AD5"
          color="#f9f9f9"
          _hover={{ background: "#f9f9f9", color: "#805AD5" }}
        >
          <Text fontSize="0.6rem" textTransform="capitalize">
            add feedback
          </Text>
        </Button>
      </Flex>
      {suggestions.map((element, index) => (
        <Suggestion key={index} data={element} />
      ))}
    </>
  );
};

export default Suggestions;
