import { useMutation } from "@tanstack/react-query";
import { removeGroup } from "api";

const useRemoveGroup = (options) => (
  useMutation({
    mutationFn: (id) => removeGroup(id),
    ...options,
  })
);

export default useRemoveGroup;
