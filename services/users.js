import { api } from "@/library/api";

export function useUsersService() {
  const get = async () => {
    return api.fetch(`user`).then((res) => {
      return res;
    });
  };
  return {
    get,
  };
}
