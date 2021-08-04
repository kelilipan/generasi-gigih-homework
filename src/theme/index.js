import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Inter',${defaultTheme.fonts.body}`,
    heading: `'Inter',${defaultTheme.fonts.heading}`,
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
});

export default theme;
