import { api } from "@/library/api";

export function useMediaService() {
  const list = async (filter, search) => {
    return api.fetch(`media/list`, { filter, search }, "POST").then((res) => {
      return res;
    });
  };
  return {
    list,
  };
}
