import { useState, useEffect } from "react";
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
import { useRouter } from "next/router";
import SuggestionComponent from "./suggestion";
import { Suggestion } from "../models/suggestion";

const Suggestions = ({
  currentFilter,
  suggestionsData,
}: {
  currentFilter: string;
  suggestionsData: Suggestion[];
}) => {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState(suggestionsData);
  const sortOptions: Array<string> = [
    "most upvotes",
    "least upvotes",
    "most comments",
    "least comments",
  ];

  const handleSort = (event: { target: { value: any } }) => {
    const sortedArray = suggestions;
    switch (event.target.value) {
      case "most upvotes":
        sortedArray.sort((a, b) => {
          return b.upvotes - a.upvotes;
        });
        break;
      case "least upvotes":
        sortedArray.sort((a, b) => {
          return a.upvotes - b.upvotes;
        });
        break;
      case "most comments":
        sortedArray.sort((a, b) => {
          return b.comments.length - a.comments.length;
        });
        break;
      case "least comments":
        sortedArray.sort((a, b) => {
          return a.comments.length - b.comments.length;
        });
        break;
      default:
    }
    setSuggestions([...sortedArray]);
  };

  useEffect(() => {
    const capitalizedFilter = currentFilter
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    const filteredArray = suggestionsData.filter((element) =>
      element.category.includes(capitalizedFilter)
    );
    setSuggestions(currentFilter === "all" ? suggestionsData : filteredArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);

  return (
    <>
      <Flex
        bg="#373E68"
        borderRadius="6px"
        p="1.6rem 1rem"
        align="center"
        mb="12px"
      >
        <Tag fontSize="1.4rem" bg="transparent" color="#fff" mr="4%">
          <Icon as={FcIdea} />
          <TagLabel ml="6px">{suggestions.length} suggestions</TagLabel>
        </Tag>
        <Flex align="center" fontWeight="600" color="gray.200" gridGap="10px">
          <Text fontSize="1.2rem" minW="80px">
            Sort by:
          </Text>
          <Select
            variant="unstyled"
            fontSize="1.2rem"
            iconSize="1.6rem"
            display="flex"
            onChange={handleSort}
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
          size="md"
          leftIcon={<AddIcon />}
          fontSize="12px"
          bg="purple.500"
          color="gray.50"
          _hover={{ background: "gray.50", color: "purple.500" }}
          onClick={() => router.push("/addFeedback")}
        >
          <Text fontSize="1.2rem" textTransform="capitalize">
            add feedback
          </Text>
        </Button>
      </Flex>
      {suggestions.map((element, index) => (
        <SuggestionComponent key={index} data={element} />
      ))}
    </>
  );
};

export default Suggestions;
