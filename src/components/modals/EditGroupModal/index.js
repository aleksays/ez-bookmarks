import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { useLocalStorage } from "@mantine/hooks";
import {
  TextInput,
  CloseButton,
  Loader,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import useActiveGroup from "hooks/useActiveGroup";
import useGroupUpdate from "hooks/useGroupUpdate";
import { closeAllModals } from "@mantine/modals";
import { useQueryClient } from "@tanstack/react-query";

const EditGroupModal = () => {
  const [activeGroupId] = useLocalStorage({ key: 'activeGroup' });
  const { data, isSuccess, isLoading } = useActiveGroup({ groupId: activeGroupId });
  const queryClient = useQueryClient()
  const mutation = useGroupUpdate({
    onSuccess: () => {
      closeAllModals();
      queryClient.invalidateQueries({ queryKey: 'bookrmarks'});
    },
  });
  const form = useForm({
    initialValues: {
      title: '',
    },
  });
  const { setFieldValue } = form;

  useEffect(() => {
    if (isSuccess) {
      setFieldValue('title', data[0].title)
    }
  }, [isSuccess, data, setFieldValue]);

   const onSubmit = form.onSubmit((values) => {
      mutation.mutate({ id: activeGroupId, payload: { title: values.title }});
    });

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Group title"
        rightSection={
          isLoading
            ? <Loader size="xs" />
            : <CloseButton size="xs" onClick={() => form.setFieldValue('title', '')} />
        }
        {...form.getInputProps('title')}
      />
      <Divider mt="xl" mb="lg" />
      <Group position="right" spacing="md">
        <Button variant="subtle" color="gray.4" onClick={closeAllModals}>Cancel</Button>
        <Button type="submit" loading={mutation.isLoading}>Update group</Button>
      </Group>
    </form>
  );
}
 
export default EditGroupModal;
