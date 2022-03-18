import { useState } from "react";
import { dataType } from "../../types/dataType";
import {
  InputLeftAddon,
  InputGroup,
  GridItem,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Flex,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const AuthorInput = ({
  data,
  setData,
}: {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {
  const [githubProfile, setGithubProfile] = useState(true);
  const [error, setError] = useState<boolean>(true);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    let newData = { ...data };
    newData["createdBy"] = event.target.value;
    setData(newData);
    setError(newData.createdBy.length < 1);
  };

  return (
    <GridItem colSpan={2}>
      <FormControl isRequired isInvalid={error}>
        <FormLabel
          htmlFor="createdBy"
          textStyle="inputLabel"
          fontSize={["1.1rem", "1.3rem"]}
        >
          Created by
        </FormLabel>
        <Flex
          w={["100%", "50%"]}
          h="30px"
          justify="space-between"
          align="center"
          m="1.4vh 0 0.8vh 0"
        >
          <Text fontSize={["15px", "18px"]}> GitHub Profile </Text>
          <Switch
            id="createdBy"
            size="md"
            defaultChecked={true}
            onChange={() => setGithubProfile(!githubProfile)}
          />
        </Flex>
        <InputGroup size="lg">
          <InputLeftAddon
            // eslint-disable-next-line react/no-children-prop
            children={githubProfile ? <Icon as={AiFillGithub} /> : "Username"}
            pointerEvents="none"
          />
          <Input
            name="createdBy"
            id="createdBy"
            placeholder={githubProfile ? "your github profile url" : "username"}
            focusBorderColor="gray.100"
            value={data.createdBy}
            onChange={handleChange}
          />
        </InputGroup>
        {error && (
          <FormErrorMessage fontSize={["1rem", "1rem"]}>
            Field is required
          </FormErrorMessage>
        )}
      </FormControl>
    </GridItem>
  );
};

export default AuthorInput;
