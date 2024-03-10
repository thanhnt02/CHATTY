import { del, get, patch, post } from "../utils/request";

const path = "users";

export const getUserList = async () => {
  const result = await get(path);
  return result;
}

export const addUser = async (data) => {
  const result = await post(path, data);
  return result;
}

export const editItem = async (id, data) => {
  const result = await patch(`users/${id}`, data)
  return result;
}

export const deleteItem = async (id) => {
  const result = await del(`users/${id}`)
  return result;
}