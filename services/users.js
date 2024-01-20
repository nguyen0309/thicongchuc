import { api } from "@/library/api";

export function useUsersService() {
  const get = async () => {
    return api.fetch(`user`).then((res) => {
      return res;
    });
  };
  const listRank = async (page, limit) => {
    return api.fetch(`list-rank`, { page, limit }, "post").then((res) => {
      return res;
    });
  };
  return {
    get,
    listRank,
  };
}
