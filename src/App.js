import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Details from "./sections/details";

const App = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h={"100vh"} py={20}>
      <Details />
    </Flex>
  </Container>
);

export default App;
