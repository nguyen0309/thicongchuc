import { api } from "@/library/api";

export function useAdminService() {
  const getListUser = async (search) => {
    return api.fetch(`admin/user/list`, { search }).then((res) => {
      return res;
    });
  };
  const listTransaction = async (search) => {
    return api.fetch(`admin/transaction/list`, { search }).then((res) => {
      return res;
    });
  };
  const createTransaction = async (user_id, package_id, price, topic_ids) => {
    return api.fetch(`admin/transaction/create`, { user_id, package_id, price, topic_ids }).then((res) => {
      return res;
    });
  };
  return {
    getListUser,
    listTransaction,
    createTransaction,
  };
}
