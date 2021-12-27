import {
  useColorMode,
  useColorModeValue,
  Divider,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Img,
  AspectRatio,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <VStack
      w={"full"}
      h={"full"}
      spacing={6}
      p={10}
      alignItems={"flex-start"}
      bg={bgColor}
    >
      <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button
            variant={"link"}
            colorScheme={"black"}
            onClick={toggleColorMode}
          >
            try changing the theme.
          </Button>
        </Text>
        <HStack spacing={6} alignItems={"center"} w={"full"}>
          <AspectRatio ratio={1} w={24}>
            <Img src={"./board.png"} alt="Board image" />
          </AspectRatio>
          <Stack
            spacing={0}
            w={"full"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <VStack>
              <Heading size={"sm"}>Penny board</Heading>
              <Text>PNYCOMP27541</Text>
            </VStack>
            <Heading size={"sm"}>$119.00</Heading>
          </Stack>
        </HStack>
        <VStack spacing={4} alignItems={"stretch"} w={"full"}>
          <HStack justifyContent={"space-between"}>
            <Text>Subtotal</Text>
            <Heading size={"sm"}>$119.00</Heading>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text>Shipping</Text>
            <Heading size={"sm"}>$19.99</Heading>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text>Taxes (estimated)</Text>
            <Heading size={"sm"}>$23.80</Heading>
          </HStack>
        </VStack>
      </VStack>
      <Divider borderColor={"lightgray"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Text>Total</Text>
        <Heading size={"lg"}>$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
