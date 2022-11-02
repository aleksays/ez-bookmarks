import {
  Tabs,
  Group,
  Paper,
  ScrollArea,
} from "@mantine/core";
import useGroups from "hooks/useGroups";
import { useLocalStorage } from "@mantine/hooks";

import BookmarksGroup from "./BookmarksGroup";
import BookmarksGroupActions from "./BookmarksGroupActions";

function Bookmarks() {
  const { data, isLoading } = useGroups();
  const [activeGroup, setActiveGroup] = useLocalStorage({ key: 'activeGroup', defaultValue: '' });
  const [isEditMode, setEditMode] = useLocalStorage({ key: 'is-edit-bookmarks', defaultValue: false });

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Tabs
      value={activeGroup || data[0].id}
      onTabChange={setActiveGroup}
      variant="pills"
      keepMounted={false}
    >
      <Group
        component={Paper}
        position="apart"
        mb="lg"
        p="sm"
        noWrap
      >
        <ScrollArea type="never">
          <Tabs.List m={0} style={{ flexWrap: 'nowrap' }}>
            {data.map(({ title, id }) => (
              <Tabs.Tab value={id}>{title}</Tabs.Tab>
            ))}
          </Tabs.List>
        </ScrollArea>
        <BookmarksGroupActions />
      </Group>

      {data.map(({ id }) => (
        <BookmarksGroup
          groupId={id}
          isEditMode={isEditMode}
          setEditMode={setEditMode}
        />
      ))}
    </Tabs>
  );
}

export default Bookmarks;
