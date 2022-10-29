import { getGlassEffect } from "constants";

export const tabsStyles = ({
  colors,
  radius,
  colorScheme,
  spacing,
  white,
  fn,
  shadows,
}) => ({
  tabsList: {
    ...getGlassEffect({ radius, colorScheme }),
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    padding: spacing.xs / 2,
  },
  tab: {
    border: 'none',
    background: 'none',
    padding: spacing.xs,
    cursor: 'pointer',
    color: colorScheme === 'light' ? colors.dark[4] : colors.gray[4],
    flex: '1 0 auto',
    transition: 'color 190ms ease-in-out',
    '&:hover': {
      color: colorScheme === 'light' ? colors.dark[5] : colors.gray[2],
    },
    '&[data-active]': {
      ...getGlassEffect({ radius, colorScheme }),
      backgroundImage: fn.gradient(),
      border: 'none',
      boxShadow: shadows.md,
      color: colors.gray[2],
    },
  },
});
