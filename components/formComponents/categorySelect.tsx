import { useState } from "react";
import {
  GridItem,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { ValueType } from "react-select/dist/declarations/src";
import { dataType } from "../../types/dataType";
import { optionType } from "../../types/selectOptionType";

const CategorySelect = ({
  data,
  setData,
  setShowGithubProfile,
}: {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
  setShowGithubProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<boolean>(true);

  const categories: Array<string> = [
    "Feature",
    "Bug (issue)",
    "Enhancement",
    "New App Idea",
    "UI/UX",
  ];

  // options for "category" select
  const categoryOptions = categories.map((element: string) => {
    return {
      label: element,
      value: element,
    };
  });

  // used to modify state of "category" property in data object
  const handleMultiSelect = (selectedOptions: ValueType<optionType, true>) => {
    let newData = { ...data };
    let categories: Array<string> = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (!categories.includes(selectedOptions[i]))
        categories.push(selectedOptions[i].value);
    }
    newData["category"] = [...categories];
    setData(newData);
    // if "category" property includes "new app idea", github select can be shown
    setShowGithubProfile(
      newData.category.some(
        (element: any) => element.toLowerCase() !== "new app idea"
      )
    );
    setError(newData.category.length < 1);
  };

  return (
    <GridItem colSpan={2}>
      <FormControl isRequired isInvalid={error}>
        <FormLabel
          htmlFor="category"
          textStyle="inputLabel"
          fontSize={["1.1rem", "1.3rem"]}
        >
          Category
        </FormLabel>
        <Select
          id="category"
          instanceId="category"
          size="lg"
          focusBorderColor="gray.300"
          placeholder="Select category..."
          selectedOptionColor="purple"
          isMulti
          options={categoryOptions}
          onChange={(selectedOption) => handleMultiSelect(selectedOption)}
        />
        {error && (
          <FormErrorMessage fontSize={["1rem", "1rem"]}>
            Field is required
          </FormErrorMessage>
        )}
      </FormControl>
    </GridItem>
  );
};

export default CategorySelect;
