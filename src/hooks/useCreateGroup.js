import { useMutation } from "@tanstack/react-query";
import { createGroup } from "api";

const useCreateGroup = (options) => (
  useMutation({
    mutationFn: (newItem) => createGroup(newItem),
    ...options,
  })
);

export default useCreateGroup;
