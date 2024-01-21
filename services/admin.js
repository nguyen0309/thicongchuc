import { api } from "@/library/api";

export function useAdminService() {
  const getListUser = async (filter, limit, page, search) => {
    return api.fetch(`admin/user/list`, { filter, limit, page, search }).then((res) => {
      return res;
    });
  };
  const adminChangePassword = async (id, password) => {
    return api.fetch(`admin/user/update-password/${id}`, { password }).then((res) => {
      return res;
    });
  };
  const listTransaction = async (filter, limit, page, search) => {
    return api.fetch(`admin/transaction/list`, { filter, limit, page, search }).then((res) => {
      return res;
    });
  };
  const listMedia = async (filter, limit, page, search) => {
    return api.fetch(`admin/media/list`, { filter, limit, page, search }).then((res) => {
      return res;
    });
  };
  const createTransaction = async (user_id, package_id, price, topic_ids) => {
    return api.fetch(`admin/transaction/create`, { user_id, package_id, price, topic_ids }).then((res) => {
      return res;
    });
  };
  const deleteTransaction = async (id) => {
    return api.fetch(`admin/transaction/delete/${id}`, {}, "delete").then((res) => {
      return res;
    });
  };
  const deleteMedia = async (id) => {
    return api.fetch(`admin/media/delete/${id}`, {}, "delete").then((res) => {
      return res;
    });
  };

  return {
    getListUser,
    listTransaction,
    listMedia,
    createTransaction,
    deleteTransaction,
    deleteMedia,
    adminChangePassword,
  };
}
