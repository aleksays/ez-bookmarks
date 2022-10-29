/*global chrome*/
import { ROOT_FOLDER_NAME } from "constants";

export const getGroups = async () => {
  const rootFolder = await chrome.bookmarks.search(ROOT_FOLDER_NAME);
  const groupItems = await chrome.bookmarks.getChildren(rootFolder[0].id);

  return groupItems;
};

export const getBookmarks = async ({ groupId }) => {
  const bookmarks = await chrome.bookmarks.getChildren(groupId);

  return bookmarks;
};
