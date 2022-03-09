import { Button, Text, Flex } from "@chakra-ui/react";

const FilterTypes = () => {
  const types: Array<string> = [
    "all",
    "feature",
    "bug (issue)",
    "enhancement",
    "new app idea",
    "UI/UX",
  ];

  return (
    <Flex
      p="1rem"
      wrap="wrap"
      gridGap="10px 6px"
      bg="#fff"
      borderRadius="6px"
      color="#3182CE"
    >
      {types.map((type, index) => (
        <Button
          size="xs"
          key={index}
          _hover={{
            background: "#3182CE",
            color: "#fff",
          }}
        >
          <Text fontSize="0.6rem" textTransform="capitalize">
            {type}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};

export default FilterTypes;
