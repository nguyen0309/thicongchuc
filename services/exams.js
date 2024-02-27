import { api } from "@/library/api";

export function useExamsService() {
  const generate = async (slug) => {
    return api.fetch(`exam/auto-generate/${slug}`).then((res) => {
      return res;
    });
  };
  const generateFree = async (slug) => {
    return api.fetch(`free/auto-generate/${slug}`).then((res) => {
      return res;
    });
  };

  const history = async (slug) => {
    return api.fetch(`exam-history/list-for-topic/${slug}`).then((res) => {
      return res;
    });
  };
  const historyAll = async () => {
    return api.fetch(`exam-history/list-all-for-user`, {}, 'post').then((res) => {
      return res;
    });
  };
  const start = async (id, page, limit) => {
    return api.fetch(`exam/${id}/start`, { page, limit }, "post").then((res) => {
      return res;
    });
  };
  const startFree = async (id, page, limit) => {
    return api.fetch(`free/${id}/start`, { page, limit }, "post").then((res) => {
      return res;
    });
  };
  const end = async (id, form, limit) => {
    return api.fetch(`exam/${id}/end`, { form, limit }, "post").then((res) => {
      return res;
    });
  };
  const endFree = async (id, form, limit) => {
    return api.fetch(`free/${id}/end`, { form, limit }, "post").then((res) => {
      return res;
    });
  };
  return {
    generate,
    start,
    end,
    history,
    historyAll,
    startFree,
    generateFree,
    endFree
  };
}
