/*global chrome*/
import { ROOT_FOLDER_NAME } from "constants";

export const getGroups = async () => {
  const rootFolder = await chrome.bookmarks.search(ROOT_FOLDER_NAME);
  const groupItems = await chrome.bookmarks.getChildren(rootFolder[0].id);

  localStorage.setItem('rootFolderId', rootFolder[0].id)

  return groupItems;
};

export const getBookmarks = async ({ groupId }) => {
  const bookmarks = await chrome.bookmarks.getChildren(groupId);

  return bookmarks;
};

export const getActiveGroup = async ({ groupId }) => {
  const group = await chrome.bookmarks.get(groupId);

  return group;
}

export const updateGroup = async ({ id, payload }) => {
  const updatedGgroup = await chrome.bookmarks.update(id, payload);

  return updatedGgroup;
}

export const createGroup = async (newItem) => await chrome.bookmarks.create(newItem);

export const removeGroup = async (id, callback) => await chrome.bookmarks.remove(id, callback);
