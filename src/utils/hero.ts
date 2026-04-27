import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        //@ts-expect-error this is a custom color name
        "secondary-background": "#A6BFD3",
      },
    },
    dark: {
      colors: {
        background: "#0D0C0F",
        //@ts-expect-error this is a custom color name
        "secondary-background": "#284377",
      },
    },
  },
});
