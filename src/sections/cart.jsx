import { VStack, Heading, Text, Button } from "@chakra-ui/react";

const Cart = () => (
  <VStack
    w={"full"}
    h={"full"}
    spacing={6}
    p={10}
    alignItems={"flex-start"}
    bg="gray.200"
  >
    <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
      <Heading size={"2xl"}>Your cart</Heading>
      <Text>
        If price is too hard on your eyes,{" "}
        <Button variant={"link"} colorScheme={"black"}>
          try changing the theme.
        </Button>
      </Text>
    </VStack>
  </VStack>
);

export default Cart;