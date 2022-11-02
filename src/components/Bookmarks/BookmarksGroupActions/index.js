import {
  Menu,
  ActionIcon,
} from "@mantine/core";
import {
  IconDots,
  IconTrash,
  IconEditCircle,
  IconFolderPlus,
  IconCirclePlus,
} from "@tabler/icons";
import { openModal } from "@mantine/modals";
import EditGroupModal from "components/modals/EditGroupModal";
import AddGroupModal from "components/modals/AddGroupModal";

const BookmarksGroupActions = () => (
  <Menu>
    <Menu.Target>
      <ActionIcon variant="light" size="lg">
        <IconDots size={18} />
      </ActionIcon>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Label>
        Group actions
      </Menu.Label>
      <Menu.Item
        icon={<IconEditCircle size={18} />}
        onClick={() => openModal({
          title: 'Edit group',
          children: <EditGroupModal />,
        })}
      >
        Edit group
      </Menu.Item>
      <Menu.Item
        icon={<IconFolderPlus size={18} />}
        onClick={() => openModal({
          title: 'Create a new group',
          children: <AddGroupModal />,
        })}
      >
        Add new group
      </Menu.Item>
      <Menu.Item icon={<IconCirclePlus size={18} />}>
        Add new dial
      </Menu.Item>

      <Menu.Label color="dark">Danger zone</Menu.Label>
      <Menu.Item color="red.8" icon={<IconTrash size={18} />}>Remove group</Menu.Item>
    </Menu.Dropdown>
  </Menu>
);
 
export default BookmarksGroupActions;
