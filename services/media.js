import { api } from "@/library/api";

export function useMediaService() {
  const list = async (filter, search) => {
    return api.fetch(`media/list`, { filter, search }, "POST").then((res) => {
      return res;
    });
  };
  const uploadMedia = async (data) => {
    return api.fetch(`admin/upload`, { data }, "POST", true).then((res) => {
      return res;
    });
  };
  return {
    list,
    uploadMedia,
  };
}
