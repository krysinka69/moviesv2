import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#FF8DA1",
          foreground: "#FFFFFF",
        },
        //@ts-expect-error this is a custom color name
        "secondary-background": "#FF8DA1",
      },
    },
    dark: {
      colors: {
        background: "#0D0C0F",
        primary: {
          DEFAULT: "#FF8DA1",
          foreground: "#FFFFFF",
        },
        //@ts-expect-error this is a custom color name
        "secondary-background": "#FF8DA1",
      },
    },
  },
});
