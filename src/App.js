import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Details from "./sections/details";
import Cart from "./sections/cart";

const App = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h={"100vh"} py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default App;
