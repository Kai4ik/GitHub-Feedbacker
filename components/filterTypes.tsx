import { Button, Text, Flex } from "@chakra-ui/react";

const FilterTypes = ({ setCurrentFilter }) => {
  const types: Array<string> = [
    "all",
    "feature",
    "bug (issue)",
    "enhancement",
    "new app idea",
    "UI/UX",
  ];

  return (
    <Flex p="2rem" wrap="wrap" gridGap="10px 6px" layerStyle="leftBase">
      {types.map((type, index) => (
        <Button
          size="lg"
          key={index}
          _hover={{
            background: "blue.500",
            color: "white",
          }}
          onClick={() => setCurrentFilter(type)}
        >
          <Text fontSize="1.2rem" textTransform="capitalize">
            {type}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};

export default FilterTypes;
