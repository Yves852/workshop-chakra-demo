# Workshop Chakra-ui

<ul style="list-style: none; color: darkgray">
<li> date: 28 décembre 2021</li>
<li> create-react-app: 5.0.0</li>
<li> chakra-ui: 1.7.3</li>
<li> react: 17.0.2</li>
</ul>
<br>

[create-react-app](create-react-app-readme.md)

> Je recommande de consulter ce document en mode _preview_ avec VScode.<br>
>
> `ctrl + maj + v` **OU** Clique droit onglet > open preview

<br>

Ce workshop est inspiré du cours [Build a Modern User Interface with Chakra UI by Lazar Nikolov](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)

<br>

## Brève description de Chakra-ui

[Chakra UI](https://chakra-ui.com) est une bibliothèque de composants simple, modulaire et accessible pour construire des applications React. Il facilite la personalisation, se base sur la création de composants, et propose une intégration très facile du mode sombre et de la responsivité.
<br>
Chakra UI a été réalisé par Segun Adebayo.

<br>

## Initialiser le projet React

```
npx create-react-app@latest workshop-react-chakra
```

<br>

## Supprimer fichiers par défaut inutile pour le projet

- Les logos public/
- App.css & index.css
- App.test.js & setupTest.js
- logo.svg

Mettre à jour les fichiers suivants

### Manifest.json

```diff
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
-   {
-     "src": "logo192.png",
-     "type": "image/png",
-     "sizes": "192x192"
-   },
-   {
-     "src": "logo512.png",
-     "type": "image/png",
-     "sizes": "512x512"
-   }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### App.js

```diff
-import logo from './logo.svg';
-import './App.css';
-
 function App() {
   return (
-    <div className="App">
-      <header className="App-header">
-        <img src={logo} className="App-logo" alt="logo" />
-        <p>
-          Edit <code>src/App.js</code> and save to reload.
-        </p>
-        <a
-          className="App-link"
-          href="https://reactjs.org"
-          target="_blank"
-          rel="noopener noreferrer"
-        >
-          Learn React
-        </a>
-      </header>
+    <div>
+      <a
+          className="App-link"
+          href="https://reactjs.org"
+          target="_blank"
+          rel="noopener noreferrer"
+        >
+          Learn React
+        </a>
     </div>
   );
 }

export default App;

```

### Index.js

```diff
import React from 'react';
import ReactDOM from 'react-dom';
-import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
 );

```

<br>

# Config

## Installer les packages Chakra-ui

```
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Ajouter ChakraProvider

```diff
import React from "react";<br>
import ReactDOM from "react-dom";<br>
import App from "./App";<br>
import reportWebVitals from "./reportWebVitals";
+import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
<React.StrictMode>

+<ChakraProvider>
<App />
+</ChakraProvider>
</React.StrictMode>,<br>
document.getElementById("root")
);
```

## Transformer App.js

Changer la fct en arrow function

```diff
+import React from "react";

- function App() {
- return (
+const App = () => (
 <div>
      <p>Learn React with Chakra-ui</p>
 </div>
);
-}

export default App;

```

Rajouter le Container et le Flex

```diff
+import { Container, Flex } from "@chakra-ui/react";

const App = () => (
- <div>
+ <Container maxW={"container.xl"} p={0}>
+   <Flex h={"100vh"} py={20}>
      <p>Learn React with Chakra-ui</p>
+   </Flex>
+ </Container>
- </div>
);

export default App;

```

<br>

# Structure

## Créer la section details et cart

Première moitié de l'app.
_sections/details.jsx_

```jsx
import { VStack, Heading, Text } from "@chakra-ui/react";

const Details = () => (
  <VStack>
    <Heading>Your details</Heading>
    <Text>If you already have an account, click here to login.</Text>
  </VStack>
);

export default Details;
```

```diff
import React from "react";
import { Container, Flex } from "@chakra-ui/react";
+import Details from "./sections/details";

const App = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h={"100vh"} py={20}>
-     <p>Learn React with Chakra-ui</p>
+     <Details />
    </Flex>
  </Container>
);

export default App;
```

<br>

## Update du stack

Section

```diff
import { VStack, Heading, Text } from "@chakra-ui/react";

const Details = () => (
  <VStack
+   as={"section"}
+   w={"full"}
+   h={"full"}
+   p={10}
+   spacing={10}
+   alignItems={"flex-start"}
  >
    <Heading>Your details</Heading>
    <Text>If you already have an account, click here to login.</Text>
  </VStack>
);

export default Details;
```

<br>

## Base du cart.jsx

```jsx
import { VStack } from "@chakra-ui/react";

const Cart = () => (
  <VStack
    w={"full"}
    h={"full"}
    spacing={10}
    alignItems={"flex-start"}
    bg="gray.200"
  ></VStack>
);

export default Cart;
```

```diff
// app
import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Details from "./sections/details";
+import Cart from "./sections/cart";

const App = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h={"100vh"} py={20}>
      <Details />
+     <Cart />
    </Flex>
  </Container>
);

export default App;

```

<br>

## Details : Ajout d'un VStack intermédiaire avec son propre gap. Taille titre.

```diff
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
+   <VStack spacing={3} alignItems={"flex-start"}>
      <Heading
+       size={"2xl"}
      >Your details</Heading>
      <Text>If you already have an account, click here to login.</Text>
+   </VStack>
  </VStack>
);

export default Details;

```

<br>

## Formulaire Details

### Base de la grille

```diff
import { VStack, Heading, Text,
+  SimpleGrid, GridItem, FormControl, FormLabel, Input,
} from "@chakra-ui/react";

const Details = () => (
  <VStack
    as={"section"}
    ...
  >
    <VStack spacing={3} alignItems={"flex-start"}>
      <Heading size={"2xl"}>Your details</Heading>
      <Text>If you already have an account, click here to login.</Text>
    </VStack>
+   <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
-     // 1
+     <GridItem colSpan={1}>
+       <FormControl>
+        <FormLabel></FormLabel>
+        <Input placeholder="" />
+       </FormControl>
+     </GridItem>
-     // 2
+     <GridItem colSpan={1}>
+       <FormControl>
+        <FormLabel></FormLabel>
+        <Input placeholder="" />
+       </FormControl>
+     </GridItem>
-     // 3
+     <GridItem colSpan={1}>
+       <FormControl>
+        <FormLabel></FormLabel>
+        <Input placeholder="" />
+       </FormControl>
+     </GridItem>
-     // 4
+     <GridItem colSpan={1}>
+       <FormControl>
+        <FormLabel></FormLabel>
+        <Input placeholder="" />
+       </FormControl>
+     </GridItem>
+   </SimpleGrid>
  </VStack>
);

```

### Form #1 Nom & prénom & adresse & ville

```diff
...

const Details = () => (
  <VStack
    as={"section"}
    ...
  >
    ...
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
-     // 1
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
+           First Name
          </FormLabel>
          <Input placeholder
+          ="John"
          />
        </FormControl>
      </GridItem>
-     // 2
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
+           Last Name
          </FormLabel>
          <Input placeholder
+           ="Doe"
          />
        </FormControl>
      </GridItem>
-     // 3
      <GridItem
+      colSpan={2}
      >
        <FormControl>
          <FormLabel>
+           Adress
          </FormLabel>
          <Input placeholder=
+           "Blvd. Broken Dreams 21"
          />
        </FormControl>
      </GridItem>
-     // 4
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
+           City
          </FormLabel>
          <Input placeholder=
+           "San Francisco"
           />
        </FormControl>
      </GridItem>
    </SimpleGrid>
  </VStack>
);

```

### Form #2 Select pays

```diff
import { VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input,
+ Select
} from "@chakra-ui/react";

const Details = () => (
  <VStack
    as={"section"}
    ...
  >
    <VStack spacing={3} alignItems={"flex-start"}>
      <Heading size={"2xl"}>Your details</Heading>
      <Text>If you already have an account, click here to login.</Text>
    </VStack>
   <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
    ...
+   <GridItem colSpan={1}>
+     <FormControl>
+       <FormLabel>Country</FormLabel>
+       <Select>
+         <option value="usa">United States of America</option>
+         <option value="uae">United Arab Emirates</option>
+         <option value="nmk">Nort Macedonia</option>
+         <option value="de">Germany</option>
+       </Select>
+     </FormControl>
+   </GridItem>
   </SimpleGrid>
  </VStack>
);

```

### Form #3 Checkbox & bouton

```diff
import { VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select,
+ Checkbox, Button,
} from "@chakra-ui/react";

const Details = () => (
  <VStack
    as={"section"}
    ...
  >
    <VStack spacing={3} alignItems={"flex-start"}>
      <Heading size={"2xl"}>Your details</Heading>
      <Text>If you already have an account, click here to login.</Text>
    </VStack>
   <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
    ...
+    <GridItem colSpan={2}>
+      <Checkbox defaultChecked>Ship to billing adress.</Checkbox>
+    </GridItem>
+    <GridItem colSpan={2}>
+      <Button size="lg" w="full">
+        Place order
+      </Button>
+    </GridItem>
   </SimpleGrid>
  </VStack>
);

```

<br>

## cart.jsx #1 Haut

```diff
import { VStack,
+ Heading,
+ Text,
+ Button,
} from "@chakra-ui/react";

const Cart = () => (
<VStack w={"full"} h={"full"}
- spacing={10}
+ spacing={6}
+ p={10}
alignItems={"flex-start"} bg="gray.200" >
+ <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
+   <Heading size={"2xl"}>Your cart</Heading>
+   <Text>
+     If price is too hard on your eyes,{" "}
+     <Button variant={"link"} colorScheme={"black"}>
+       try changing the theme.
+     </Button>
+   </Text>
+ </VStack>
</VStack>
```

<br>

## cart.jsx #2 Image

```diff
import {
+ HStack,
  VStack, Heading, Text, Button,
+ Img,
+ AspectRatio,
} from "@chakra-ui/react";

const Cart = () => (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"} bg="gray.200" >
  <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
    <Heading size={"2xl"}>Your cart</Heading>
    <Text>
      If price is too hard on your eyes,{" "}
      <Button variant={"link"} colorScheme={"black"}>
        try changing the theme.
      </Button>
    </Text>

+   <HStack spacing={6} alignItems={"center"} w={"full"}>
+     <AspectRatio ratio={1} w={24}>
+       <Img src={"./board.png"} alt="Board image" />
+     </AspectRatio>
+   </HStack>
  </VStack>
</VStack>
```

<br>

## cart.jsx #3 Detail produit

```diff
import {
+ Stack,
  HStack, VStack, Heading, Text, Button, GridItem, Img, AspectRatio } from "@chakra-ui/react";

const Cart = () => (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"} bg="gray.200" >
  <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
    ...

    <HStack spacing={6} alignItems={"center"} w={"full"}>
      <AspectRatio ratio={1} w={24}>
        <Img src={"./board.png"} alt="Image" />
      </AspectRatio>
+     <Stack
+       spacing={0}
+       w={"full"}
+       direction={"row"}
+       justifyContent={"space-between"}
+       alignItems={"center"}
+     >
+       <VStack>
+         <Heading size={"sm"}>Penny board</Heading>
+         <Text>PNYCOMP27541</Text>
+       </VStack>
+       <Heading size={"sm"}>$119.00</Heading>
+     </Stack>
    </HStack>
  </VStack>
</VStack>
```

<br>

## cart.jsx #4 Detail prix

Base éléments

```jsx
<VStack spacing={4} alignItems={"stretch"} w={"full"}>
  <HStack justifyContent={"space-between"}>
    <Text></Text>
    <Heading size={"sm"}></Heading>
  </HStack>
</VStack>
```

```diff
const Cart = () => (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"} bg="gray.200" >
  <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
    ...
    <HStack spacing={6} alignItems={"center"} w={"full"}>
      ...
        <Heading size={"sm"}>$119.00</Heading>
      </Stack>
    </HStack>
+   <VStack spacing={4} alignItems={"stretch"} w={"full"}>
-     // 1
+     <HStack justifyContent={"space-between"}>
+       <Text>Subtotal</Text>
+       <Heading size={"sm"}>$119.00</Heading>
+     </HStack>
-     // 2
+     <HStack justifyContent={"space-between"}>
+       <Text>Shipping</Text>
+       <Heading size={"sm"}>$19.99</Heading>
+     </HStack>
-     // 3
+     <HStack justifyContent={"space-between"}>
+       <Text>Taxes (estimated)</Text>
+       <Heading size={"sm"}>$23.80</Heading>
+     </HStack>
+   </VStack>
  </VStack>
</VStack>
```

<br>

## cart.jsx #5 Total prix

```diff
import {
+ Divider,
Stack, HStack, VStack, Heading, Text, Button, GridItem, Img, AspectRatio } from "@chakra-ui/react";


const Cart = () => (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"} bg="gray.200" >
  <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
    ...
    <VStack spacing={4} alignItems={"stretch"} w={"full"}>
      ...
      <HStack justifyContent={"space-between"}>
        <Text>Taxes (estimated)</Text>
        <Heading size={"sm"}>$23.80</Heading>
      </HStack>
    </VStack>
  </VStack>
+ <Divider borderColor={"lightgray"} />
+ <HStack justifyContent={"space-between"} w={"full"}>
+   <Text>Total</Text>
+   <Heading size={"lg"}>$162.79</Heading>
+ </HStack>
</VStack>
```

<br>

## cart.jsx return statement

```diff
const Cart = () =>
+{ return
 (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"} bg="gray.200" >
...
</VStack>
);
+};
```

<br>

## Dark mode

cart.jsx - Mise en place du mode dark via le toggle color

```diff
import {
+  useColorMode, useColorModeValue,
  Divider, Stack, HStack, VStack, Heading, Text, Button, GridItem, Img, AspectRatio } from "@chakra-ui/react";

const Cart = () => {

+const { toggleColorMode } = useColorMode();
+const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

return (
<VStack w={"full"} h={"full"} p={10} spacing={6} alignItems={"flex-start"}
- bg="gray.200"
+ bg={bgColor}
>
  <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
    <VStack w={"full"} spacing={3} alignItems={"flex-start"}>
      <Heading size={"2xl"}>Your cart</Heading>
      <Text>
        If price is too hard on your eyes,{" "}
        <Button
          variant={"link"}
          colorScheme={"black"}
+         onClick={toggleColorMode}
        >
          try changing the theme.
        </Button>
</VStack>
```

<br>

## Ajouter global responsive

app.js

https://chakra-ui.com/docs/features/responsive-styles

```diff
const App = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex
-     h={"100vh"}
+     h={{ base: "auto", md: "100vh" }}
-     py={20}
+     py={[0, 10, 20]}

+     direction={{
+       base: "column-reverse",
+       md: "row",
+     }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default App;
```

<br>

## details.jsx return statement

```diff
const Details = () =>
+{ return
 (
<VStack as={"section"} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} >
...
</VStack>
);
+};
```

<br>

## details.jsx responsive local

```diff
import {
+ useBreakpointValue,
  VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, } from "@chakra-ui/react";

  const Details = () => {
+ const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack
      ...
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
-       <GridItem colSpan={1}>
+       <GridItem colSpan={colSpan}>
          ...
        </GridItem>
-       <GridItem colSpan={1}>
+       <GridItem colSpan={colSpan}>
          ...
        </GridItem>
-       <GridItem colSpan={1}>
+       <GridItem colSpan={colSpan}>
          ...
        </GridItem>
-       <GridItem colSpan={1}>
+       <GridItem colSpan={colSpan}>
          ...
        </GridItem>
```

<br>

## Style global #1 police

Créer le dosshier src/theme<br>
Créer le fichier theme/index.js

```js
import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // Define Montserrat as font, define default as fallback in case Montserrat is not loaded
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
});

export default theme;
```

Importer la police avec un fichier theme/style.css

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700&display=swap");
```

src/index.js

```diff
import { ChakraProvider } from "@chakra-ui/react";
+import theme from "../src/theme";
+import "../src/theme/style.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
+    theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

<br>

## Style global #2 couleur texte avec dark mode

theme/index.js - Couleurs texte simple

```diff
import { extendTheme, theme as base } from "@chakra-ui/react";
+import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
+ components: {
+     Text: {
+       baseStyle: (props) => ({
+         color: mode("gray.600", "gray.400")(props),
+       }),
+     },
+   },
});

export default theme;
```

<br>

## Style global #3 couleurs de brand

Première façon

theme/index.js

```js
colors: {
  brand: {
    50: "#f5fee5",
    100: "#e1fbb2",
    200: "#cdf781",
    300: "#b8ee56",
    400: "#a2e032",
    500: "#8ac919",
    600: "#71ab09",
    700: "#578602",
    800: "#3c5e00",
    900: "#203300",
  },
},
```

```diff
const theme = extendTheme({
+  colors: {
+    brand: {
+      50: "#f5fee5",
+      100: "#e1fbb2",
+      200: "#cdf781",
+      300: "#b8ee56",
+      400: "#a2e032",
+      500: "#8ac919",
+      600: "#71ab09",
+      700: "#578602",
+      800: "#3c5e00",
+      900: "#203300",
+    },
+  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
```

details.jsx

```diff
(
      ...
      <GridItem colSpan={2}>
        <Button
+         colorScheme={"brand"}
          size="lg" w="full">
          Place order
        </Button>
      </GridItem>
    </SimpleGrid>
  </VStack>
);
```

<br>

## Style global #4 couleurs de brand

Deuxième façon

details.jsx

```diff
(
      ...
      <GridItem colSpan={2}>
        <Button
-         colorScheme={"brand"}
          size="lg" w="full">
          Place order
        </Button>
      </GridItem>
    </SimpleGrid>
  </VStack>
);
```

theme/index.js

```diff
import { extendTheme, theme as base
+ withDefaultColorScheme,
   } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    colors: {
      ...
    },
    fonts: {
      ...
    },
    components: {
        Text: {
          baseStyle: (props) => ({
            color: mode("gray.600", "gray.400")(props),
          }),
        },
      },
  },
+ withDefaultColorScheme({
+   colorScheme: "brand",
+   components: ["Checkbox", "Button"],
+ })
);

export default theme;
```

<br>

## Style global #5 variant style, input couleur remplit

theme/index.js

```diff
import { extendTheme, theme as base, withDefaultColorScheme
+ withDefaultVariant,
   } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    ...
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox", "Button"],
  }),
+ withDefaultVariant({
+   variant: "filled",
+   components: ["Input", "Select"],
+ })
);
```

<br>

## Style global #6 checkbox

theme/index.js

```diff
const theme = extendTheme({
    ...
    components: {
        Text: {
          baseStyle: (props) => ({
            color: mode("gray.600", "gray.400")(props),
          }),
        },
+       Checkbox: {
+         baseStyle: {
+           control: {
+             borderRadius: "none",
+             _focus: {
+               ring: 2,
+               ringColor: "brand.500",
+             },
+           },
+         },
+       },
      },
  },
```

<br>

## Style global #7 formulaire : input & select

theme/index.js

```diff
import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant, } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

+const inputSelectStyles = {
+  variants: {
+    filled: {
+      field: {
+        _focus: {
+          borderColor: "brand.500",
+        },
+      },
+    },
+  },
+  sizes: {
+    md: {
+      field: {
+        borderRadius: "none",
+      },
+    },
+  },
+};

const theme = extendTheme({
    ...
    components: {
      Text: {
        baseStyle: (props) => ({
          color: mode("gray.600", "gray.400")(props),
        }),
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
          },
        },
      },
+     Input: { ...inputSelectStyles },
+     Select: { ...inputSelectStyles },
    },
  },
);
```

<br>

## Style global #8 créer un variant pour le bouton _Place order_

### étape 1 : couleurs et retirer l'arrondi

theme/index.js

```diff
const theme = extendTheme({
    ...
    components: {
      Text: {
        ...
      },
      Checkbox: {
        ...
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
+     Button: {
+       variants: {
+         primary: (props) => ({
+           rounded: "non",
+           color: mode("white", "gray.800")(props),
+           backgroundColor: mode("brand.600", "brand.300")(props),
+         }),
+       },
+     },
    },
  },
);
```

details.jsx

```diff
const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack ...>
      ...
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        ...
        <GridItem colSpan={2}>
          <Button
+          variant="primary"
           size="lg" w="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
```

### étape 2 : réutiliser du style pour le focus bouton

theme/index.js

```diff

+const brandRing = {
+  _focus: {
+    ring: 2,
+    ringColor: "brand.500",
+  },
+};

const theme = extendTheme({
    ...
    components: {
      Text: {
        ...
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
-           _focus: {
-             ring: 2,
-             ringColor: "brand.500",
-           },
+           ...brandRing,
          },
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "non",
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.600", "brand.300")(props),
+           ...brandRing,
          }),
        },
      },
    },
  },
);
```

### étape 3 : style sur le hover et le clic

theme/index.js

```diff
const theme = extendTheme({
    ...
    components: {
      ...
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "non",
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.500", "brand.200")(props),
            ...brandRing,
+
+           _hover: {
+             backgroundColor: mode("brand.600", "brand.300")(props),
+           },
+
+            _active: {
+             backgroundColor: mode("brand.700", "brand.400")(props),
+           },
          }),
        },
      },
    },
  },
);
```

<br>

### Merci d'avoir participé à ce workshop
