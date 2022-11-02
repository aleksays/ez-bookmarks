import { useMutation } from "@tanstack/react-query";
import { updateGroup } from "api";

const useGroupUpdate = (options) => (
  useMutation({
    mutationFn: ({ id, payload }) => updateGroup({ id, payload }),
    ...options,
  })
);

export default useGroupUpdate;