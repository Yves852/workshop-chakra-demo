import { VStack, Heading, Text } from "@chakra-ui/react";

const Details = () => (
  <VStack
    as={"section"}
    w={"full"}
    h={"full"}
    p={10}
    spacing={10}
    alignItems={"flex-start"}
  >
    <Heading>Your details</Heading>
    <Text>If you already have an account, click here to login.</Text>
  </VStack>
);

export default Details;
