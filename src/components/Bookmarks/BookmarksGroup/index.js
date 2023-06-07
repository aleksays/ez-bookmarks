import {
   Tabs,
   SimpleGrid,
} from "@mantine/core";
import useBookmarks from "hooks/useBookmarks";

import BookmarksItem from "../BookmarksItem";

const BookmarksGroup = ({
  groupId,
  isEditMode,
  setEditMode,
}) => {
  const { data } = useBookmarks({ groupId });

  if (!data) {
    return null
  }

  return (
    <Tabs.Panel value={groupId}>
      <SimpleGrid cols={5}>
        {data.map(({ title, url }) => (
          <BookmarksItem
            url={url}
            title={title}
            isEditMode={isEditMode}
            setEditMode={setEditMode}
          />
        ))}
      </SimpleGrid>
    </Tabs.Panel>
  );
}

export default BookmarksGroup;
