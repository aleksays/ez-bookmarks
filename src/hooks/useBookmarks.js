import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "api";

const useBookmarks = ({ groupId }) => (
  useQuery(['bookmarks', { groupId }], () => getBookmarks({ groupId }))
);

export default useBookmarks;