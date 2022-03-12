import { useState } from "react";
import {
  Center,
  VStack,
  SimpleGrid,
  Input,
  InputLeftAddon,
  InputGroup,
  GridItem,
  Textarea,
  Heading,
  Flex,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
  Switch,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FcLinux } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

type objectInstance = {
  title: string;
  description: string;
  category: string;
  repo: string;
  createdBy: string;
};

const AddFeedback = () => {
  const dataInstance: objectInstance = {
    title: "",
    description: "",
    category: "",
    repo: "",
    createdBy: "",
  };

  const [data, setData] = useState(dataInstance);
  const [githubProfile, setGithubProfile] = useState(true);
  const inputSize = useBreakpointValue(["md", "xs"]);
  const categories: Array<string> = [
    "Feature",
    "Bug (issue)",
    "Enhancement",
    "New App Idea",
    "UI/UX",
  ];

  const handleChange = (event: { target: { name: string; value: string } }) => {
    let newData = { ...data };
    newData[event.target.name as keyof objectInstance] = event.target.value;
    setData(newData);
    console.info(newData);
  };

  return (
    <Center p="2rem">
      <VStack w="100%" spacing={5}>
        <Flex align="center" fontSize={["2rem", "1.6rem"]} gridGap="6px">
          <Heading as="h3" fontSize={["1.8rem", "1.4rem"]} color="purple.700">
            Give me an idea
          </Heading>
          <Icon as={FcLinux} />
        </Flex>
        <SimpleGrid columns={2} w={["86%", "40%"]} rowGap={5}>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="ideaName" fontSize={["1.1rem", "0.8rem"]}>
                Idea Name
              </FormLabel>
              <Input
                id="ideaName"
                name="title"
                placeholder="Title"
                focusBorderColor="gray.300"
                size={inputSize}
                value={data.title}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="category" fontSize={["1.1rem", "0.8rem"]}>
                Category
              </FormLabel>
              <Select
                name="category"
                id="category"
                size={inputSize}
                focusBorderColor="gray.300"
                value={data.category}
                onChange={handleChange}
              >
                {categories.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="description" fontSize={["1.1rem", "0.8rem"]}>
                Idea Description
              </FormLabel>
              <Textarea
                name="description"
                id="description"
                placeholder="Description"
                size={inputSize}
                resize="vertical"
                focusBorderColor="gray.300"
                value={data.description}
                onChange={handleChange}
              />
              <FormHelperText fontSize={["1rem", "0.5rem"]}>
                must be at least 20 characters long
              </FormHelperText>
              <FormErrorMessage>Field is required.</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="githubRepo" fontSize={["1.1rem", "0.8rem"]}>
                Github Repository
              </FormLabel>
              <Select
                id="githubRepo"
                size={inputSize}
                focusBorderColor="gray.300"
                name="repo"
                value={data.repo}
                onChange={handleChange}
              >
                {categories.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="createdBy" fontSize={["1.1rem", "0.8rem"]}>
                Created by
              </FormLabel>
              <Flex
                w={["100%", "50%"]}
                h="30px"
                justify="space-between"
                align="center"
                m="1.4vh 0 0.8vh 0"
              >
                <Text fontSize={["15px", "10px"]}> GitHub Profile </Text>
                <Switch
                  id="createdBy"
                  size="sm"
                  defaultChecked={true}
                  onChange={() => setGithubProfile(!githubProfile)}
                />
              </Flex>
              <InputGroup size={inputSize}>
                <InputLeftAddon
                  // eslint-disable-next-line react/no-children-prop
                  children={
                    githubProfile ? <Icon as={AiFillGithub} /> : "Username"
                  }
                  pointerEvents="none"
                />
                <Input
                  name="createdBy"
                  id="createdBy"
                  placeholder={
                    githubProfile ? "your github profile url" : "username"
                  }
                  focusBorderColor="gray.100"
                  value={data.createdBy}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <Button
          size="sm"
          bg="purple.700"
          color="gray.100"
          _hover={{ background: "green.500" }}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
};

export default AddFeedback;
