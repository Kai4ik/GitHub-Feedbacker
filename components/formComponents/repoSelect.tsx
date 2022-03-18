import { useState } from "react";
import {
  GridItem,
  FormLabel,
  FormControl,
  Avatar,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Select, chakraComponents, OptionProps } from "chakra-react-select";
import { ValueType } from "react-select/dist/declarations/src";
import { dataType } from "../../types/dataType";
import { optionType } from "../../types/selectOptionType";

const customComponents = {
  Option: ({ children, ...props }: OptionProps<OptionType>) => (
    <chakraComponents.Option {...props}>
      {props.data.icon} {children}
    </chakraComponents.Option>
  ),
};

const RepoSelect = ({
  repos,
  data,
  setData,
}: {
  repos: { html_url: string; img: string }[];
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {
  const [error, setError] = useState<boolean>(true);

  // options for GitHub repo select
  const reposOptions = repos.map(
    (element: { html_url: string; img: string }) => {
      return {
        label: element.html_url,
        value: element.html_url,
        icon: <Avatar size="xs" src={element.img} name={element.html_url} />,
      };
    }
  );

  // used to modify state of "repo" property in data object
  const handleSelect = (selectedOption: ValueType<optionType>) => {
    let newData = { ...data };
    newData["repo"] = selectedOption.value;
    setData(newData);
    setError(newData.repo.length < 0);
  };

  return (
    <GridItem colSpan={2}>
      <FormControl isRequired isInvalid={error}>
        <FormLabel
          htmlFor="githubRepo"
          textStyle="inputLabel"
          fontSize={["1.1rem", "1.3rem"]}
        >
          Github Repository
        </FormLabel>
        <Select
          id="githubRepo"
          instanceId="githubRepo"
          size="lg"
          options={reposOptions}
          focusBorderColor="gray.300"
          placeholder="Select repo..."
          selectedOptionColor="purple"
          components={customComponents}
          chakraStyles={{
            option: (prev) => ({
              ...prev,
              overflowX: ["visible", "hidden"],
              display: "flex",
              gap: "10px",
              fontSize: ["0.8rem", "1.4rem"],
            }),
          }}
          onChange={(selectedOption) => handleSelect(selectedOption)}
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

export default RepoSelect;
