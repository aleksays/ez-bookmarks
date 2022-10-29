import { useQuery } from "@tanstack/react-query";
import { getGroups } from "api";

const useGroups = () => (
  useQuery(['groups'], () => getGroups())
);

export default useGroups;
