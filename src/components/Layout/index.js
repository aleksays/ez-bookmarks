import {
  SimpleGrid,
} from "@mantine/core";
import Widgets from "components/Widgets";
import Bookmarks from "components/Bookmarks";

const Layout = () => (
  <SimpleGrid
    cols={3}
    spacing="md"
    p="xl"
    sx={({ fn, colors }) => ({
      height: '100vh',
    })}
  >
    <div
      style={{ gridColumn: '1 / 3' }}
    >
      <Bookmarks />
    </div>
    <Widgets />
  </SimpleGrid>
);

export default Layout;
