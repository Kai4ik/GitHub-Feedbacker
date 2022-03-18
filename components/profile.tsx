import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

const Profile = ({
  name,
  location,
  avatar_url,
  portfolio,
}: {
  name: string;
  location: string;
  avatar_url: string;
  portfolio: string;
}) => {
  return (
    <Flex
      p="2rem"
      layerStyle="leftBase"
      align="center"
      flexDirection="column"
      rowGap={4}
      bgGradient="linear-gradient(to-tr, hsla(339, 100%, 55%, 1), hsla(197, 100%, 64%, 1) );"
    >
      <Avatar src={avatar_url} name={name} size="2xl" />
      <Text fontSize="2xl" color="gray.200" fontWeight={600}>
        {name}
      </Text>
      <Flex
        align="center"
        fontSize="1.2rem"
        gap="10px"
        bg="gray.100"
        borderRadius="6px"
        p="0.2rem 3rem"
      >
        <Icon as={MdLocationPin} />
        <Text> {location} </Text>
      </Flex>
      <Link
        href={portfolio}
        isExternal={true}
        color="gray.200"
        boxShadow="none !important"
      >
        {portfolio}
      </Link>
    </Flex>
  );
};

export default Profile;
