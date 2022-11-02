import { useQuery } from "@tanstack/react-query";
import { getActiveGroup } from "api";

const useActiveGroup = ({ groupId }) => (
  useQuery(['activeGroup', { groupId }], () => getActiveGroup({ groupId }))
);

export default useActiveGroup;
