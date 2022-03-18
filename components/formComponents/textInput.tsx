import { useState } from "react";
import {
  Input,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { dataType } from "../../types/dataType";

const TextInput = ({
  data,
  setData,
}: {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {
  const [error, setError] = useState<boolean>(true);
  const handleChange = (event: { target: { name: string; value: string } }) => {
    let newData = { ...data };
    newData["title"] = event.target.value;
    setData(newData);
    setError(newData.title.length < 4);
  };

  return (
    <GridItem colSpan={2}>
      <FormControl isRequired isInvalid={error}>
        <FormLabel
          htmlFor="ideaName"
          textStyle="inputLabel"
          fontSize={["1.1rem", "1.3rem"]}
        >
          Idea Name
        </FormLabel>
        <Input
          id="ideaName"
          name="title"
          placeholder="Title"
          focusBorderColor="gray.300"
          size="lg"
          value={data.title}
          onChange={handleChange}
        />
        {error ? (
          <FormErrorMessage fontSize={["1rem", "1rem"]}>
            Field is required (minimum 4 characters long)
          </FormErrorMessage>
        ) : (
          <FormHelperText fontSize={["1rem", "1rem"]}>
            must be at least 4 characters long
          </FormHelperText>
        )}
      </FormControl>
    </GridItem>
  );
};

export default TextInput;
