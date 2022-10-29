import PropTypes from 'prop-types';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import Layout from 'components/Layout';
import * as components from './components-styles';

const App = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) => (
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  );

  useHotkeys([['mod + J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          components,
          globalStyles: (theme) => ({
            body: {
              backgroundColor: theme.black,
            },
          }),
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <Layout />
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default App;
