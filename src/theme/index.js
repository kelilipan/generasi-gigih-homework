import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import colors from "./colors";

const Button = {
  baseStyle: {
    borderRadius: "50px",
  },
};

const theme = extendTheme(
  {
    components: {
      Button,
    },
    fonts: {
      body: `'Inter',${defaultTheme.fonts.body}`,
      heading: `'Inter',${defaultTheme.fonts.heading}`,
    },
    colors: {
      brand: colors,
    },
    styles: {
      global: () => ({
        html: {
          scrollBehavior: "smooth",
          overflowY: "scroll",
        },
        body: {
          color: "white",
          bg: `linear-gradient(180deg, rgb(36, 36, 36) 0%,#121212 54%,#121212 100%)`,
          bgAttachment: "fixed",
          pos: "relative",
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
