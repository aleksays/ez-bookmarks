import { createStyles, keyframes } from "@mantine/core";
import { getGlassEffect } from "constants";

const jiggle = keyframes({
  '0%': {
    transform: 'rotate(-1deg)',
  },
  '50%': {
    transform: 'rotate(1deg)',
  }
})

const jiggle2 = keyframes({
  '0%': {
    transform: 'rotate(-3deg)',
  },
  '50%': {
    transform: 'rotate(3deg)',
  }
});

export const useStyles = createStyles(({ colorScheme, radius }) => ({
  glass: {
    ...getGlassEffect({
      colorScheme,
      radius,
    }),
    transition: 'all 210ms ease-in-out',
  },
  hovered: {
    '&:hover': {
      backdropFilter: 'blur(20)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    },
  },
  animated: {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
  },
  jiggle: {
    animation: `${jiggle} 230ms infinite`,
  },
  jiggle2: {
    animation: `${jiggle2} 230ms infinite`,
  },
}));
