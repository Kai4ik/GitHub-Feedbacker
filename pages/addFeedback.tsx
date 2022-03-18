import { useState, useEffect } from "react";
import {
  Center,
  VStack,
  SimpleGrid,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FcLinux } from "react-icons/fc";

// form components - selects, textarea, simple input of type "text"
import CategorySelect from "../components/formComponents/categorySelect";
import RepoSelect from "../components/formComponents/repoSelect";
import AuthorInput from "../components/formComponents/authorInput";
import TextArea from "../components/formComponents/textarea";
import TextInput from "../components/formComponents/textInput";

// typescript defined type
import { dataType } from "../types/dataType";

const AddFeedback = ({
  repos,
}: {
  repos: { html_url: string; img: string }[];
}) => {
  // state variable of type "dataType"
  const [data, setData] = useState<dataType>({
    title: "",
    description: "",
    category: [],
    repo: "",
    createdBy: "",
  });
  const [showGithubProfile, setShowGithubProfile] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  // used to check whether "repo" property is required
  // returns boolean - true if repo required, otherwise false
  const ifRepoRequired = (): boolean => {
    return data.category.some(
      (element: any) => element.toLowerCase() !== "new app idea"
    );
  };

  // used to validate data
  // returns boolean - true if data passes validation, otherwise false
  const validateData = (): boolean => {
    return (
      data.title.length > 3 &&
      data.description.length > 19 &&
      data.category.length !== 0 &&
      data.createdBy.length > 0
    );
  };

  useEffect(() => {
    const checkData: boolean = validateData();
    setDisabledSubmit(
      ifRepoRequired() ? !checkData && data.repo.length < 1 : !checkData
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = async () => {
    const checkData: boolean = validateData();
    if (checkData) {
      if (ifRepoRequired()) {
        if (data.repo.length > 0) {
          const result = await fetch("/api/createSuggestion", {
            method: "POST",
            body: JSON.stringify(data),
          });
        }
      } else {
        const result = await fetch("/api/createSuggestion", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }
    }
  };

  return (
    <Center p="2rem">
      <VStack w="100%" spacing={5}>
        <Flex align="center" fontSize={["2rem", "2.6rem"]} gridGap="6px">
          <Heading as="h3" fontSize={["1.8rem", "2.6rem"]} color="purple.700">
            Give me an idea
          </Heading>
          <Icon as={FcLinux} mt="8px" />
        </Flex>
        <SimpleGrid columns={2} w={["86%", "40%"]} rowGap={8}>
          <TextInput data={data} setData={setData} />
          <CategorySelect
            data={data}
            setData={setData}
            setShowGithubProfile={setShowGithubProfile}
          />
          <TextArea data={data} setData={setData} />
          {showGithubProfile && (
            <RepoSelect repos={repos} data={data} setData={setData} />
          )}
          <AuthorInput data={data} setData={setData} />
        </SimpleGrid>
        <Button
          size="lg"
          bg="purple.700"
          color="gray.100"
          isDisabled={disabledSubmit}
          _hover={{ background: "green.500" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://api.github.com/users/kai4ik/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  const jsonData = await data.json();
  const repos: {
    html_url: string;
    img: string;
  }[] = [];
  jsonData.map((repo: { html_url: string; owner: any }) => {
    repos.push({
      html_url: repo.html_url,
      img: repo.owner.avatar_url,
    });
  });
  return {
    props: {
      repos: repos,
    },
  };
}

export default AddFeedback;
