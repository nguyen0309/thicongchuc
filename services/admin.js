import { api } from "@/library/api";

export function useAdminService() {
  const getListUser = async (search) => {
    return api.fetch(`admin/user/list`, { search }).then((res) => {
      return res;
    });
  };
  const listPost = async (filter, limit, page, search) => {
    return api.fetch(`admin/post/list`, { filter, limit, page, search }).then((res) => {
      return res;
    });
  };
  const listTransaction = async (filter, limit, page, search) => {
    return api.fetch(`admin/transaction/list`, { filter, limit, page, search }).then((res) => {
      return res;
    });
  };
  const createTransaction = async (user_id, package_id, price, topic_ids) => {
    return api.fetch(`admin/transaction/create`, { user_id, package_id, price, topic_ids }).then((res) => {
      return res;
    });
  };
  const addPost = async (title, description, content, img, topic_id, tag_ids) => {
    return api.fetch(`admin/post/create`, { title, description, content, img, topic_id, tag_ids }).then((res) => {
      return res;
    });
  };
  const getPost = async (title, description, content, img, topic_id, tag_ids) => {
    return api.fetch(`admin/post/create`, { title, description, content, img, topic_id, tag_ids }).then((res) => {
      return res;
    });
  };

  return {
    getListUser,
    listTransaction,
    createTransaction,
    listPost,
    addPost,
  };
}
