import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    padding: theme.spacing.lg * 2,
    gap: theme.spacing.lg,
    height: '100vh',
  },
  leadBlock: {
    gridColumn: '1 / 4',
    gridRow: '1 / -1',
  },
}));
