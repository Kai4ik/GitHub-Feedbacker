import { useState } from "react";
import {
  GridItem,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { dataType } from "../../types/dataType";

const TextArea = ({
  data,
  setData,
}: {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {
  const [error, setError] = useState<boolean>(true);
  const handleChange = (event: { target: { name: string; value: string } }) => {
    let newData = { ...data };
    newData["description"] = event.target.value;
    setData(newData);
    setError(newData.description.length < 20);
  };

  return (
    <GridItem colSpan={2}>
      <FormControl isRequired isInvalid={error}>
        <FormLabel
          htmlFor="description"
          textStyle="inputLabel"
          fontSize={["1.1rem", "1.3rem"]}
        >
          Idea Description
        </FormLabel>
        <Textarea
          name="description"
          id="description"
          placeholder="Description"
          size="lg"
          resize="vertical"
          focusBorderColor="gray.300"
          value={data.description}
          onChange={handleChange}
        />
        {error ? (
          <FormErrorMessage fontSize={["1rem", "1rem"]}>
            Field is required (minimum 20 characters long)
          </FormErrorMessage>
        ) : (
          <FormHelperText fontSize={["1rem", "1rem"]}>
            must be at least 20 characters long
          </FormHelperText>
        )}
      </FormControl>
    </GridItem>
  );
};

export default TextArea;
