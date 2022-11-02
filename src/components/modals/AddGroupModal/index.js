import {
   Group,
   Divider,
   TextInput,
   Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import useCreateGroup from "hooks/useCreateGroup";
import { useQueryClient } from "@tanstack/react-query";

const AddGroupModal = () => {
  const form = useForm({
    initialValues: {
      title: '',
    },
  });

  const parentId = localStorage.getItem('rootFolderId');
  const queryClient = useQueryClient();
  const mutation = useCreateGroup({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: 'bookmarks' });
      closeAllModals();
    },
  })

  const onSubmit = form.onSubmit((values) => {
    mutation.mutate({ parentId, title: values.title });
  });

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Group title"
        {...form.getInputProps('title')}
      />
      <Divider mt="xl" mb="lg" />
      <Group position="right" spacing="md">
        <Button variant="subtle" color="gray.4" onClick={closeAllModals}>Cancel</Button>
        <Button type="submit" loading={mutation.isLoading}>Create group</Button>
      </Group>
    </form>
  );
}
 
export default AddGroupModal;
