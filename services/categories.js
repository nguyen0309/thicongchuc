import { api } from "@/library/api";

export function useCatgoriesService() {
  const list = async () => {
    return api.fetch(`topic/list`,{}, 'post').then((res) => {
      return res;
    });
  };
  return {
    list,
  };
}
