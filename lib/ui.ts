import { createSystem } from "frog/ui";

export const { Box, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    white: "white",
    black: "black",
    fcPurple: "rgb(71,42,145)",
    red: "rgb(178,34,51)",
    green: "green",
    yellow: 'rgb(247,169,72)',
    chocolate: 'rgb(67,33,47)',
    purple: 'rgb(60,59,110)'
  },
  fonts: {
    default: [
      {
        name: "Space Mono",
        source: "google",
      },
    ],
  },
});