const globalStyles = (theme) => ({
  body: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.red[5] : theme.colors.dark[3],
  },
});

export default globalStyles;
