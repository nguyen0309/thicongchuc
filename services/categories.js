import { api } from "@/library/api";

export function useCatgoriesService() {
  const list = async (filter) => {
    return api.fetch(`topic/list`, { filter }, "post").then((res) => {
      return res;
    });
  };
  return {
    list,
  };
}
