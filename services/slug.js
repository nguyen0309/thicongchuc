import { api } from "@/library/api";

export function useSlugService() {
  const get = async (slug) => {
    return api.fetch(`${slug}`).then((res) => {
      return res;
    });
  };
  return {
    get,
  };
}
