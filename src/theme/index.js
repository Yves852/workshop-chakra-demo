import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `MontSerrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
});

export default theme;
