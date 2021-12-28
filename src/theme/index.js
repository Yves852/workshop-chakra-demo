import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const theme = extendTheme(
  {
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
    fonts: {
      heading: `MontSerrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
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
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox", "Button"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
