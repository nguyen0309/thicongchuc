import { api } from "@/library/api";

export function useCarService() {
  const get = async (id) => {
    return api.fetch(`public_posts/${id}`).then((res) => {
      return res;
    });
  };
  const bids = async (id) => {
    return api.fetch(`bids?car_id=${id}`).then((res) => {
      return res;
    });
  };
  return {
    get,
    bids,
  };
}
