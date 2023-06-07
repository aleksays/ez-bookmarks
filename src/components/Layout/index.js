import {
  SimpleGrid,
} from "@mantine/core";
import Bookmarks from "components/Bookmarks";

const Layout = () => (
  <SimpleGrid
    cols={1}
    spacing="md"
    p="xl"
    sx={({ fn, colors }) => ({
      height: '100vh',
    })}
  >
    <div>
      <Bookmarks />
    </div>
  </SimpleGrid>
);

export default Layout;
