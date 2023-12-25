import { api } from "@/library/api";

export function useAuthService() {
  const signUp = async (email, name, password) => {
    return api
      .fetch("sign-up", {
        email,
        name,
        password,
      })
      .then((res) => {
        return res;
      });
  };
  const signIn = async (email, password) => {
    return api
      .fetch("sign-in", {
        email,
        password,
      })
      .then((res) => {
        if (res?.data?.token) {
          if (process.client) localStorage.setItem("congchuc24h_token", res.data.token);
        }
        return res;
      });
  };

  const reset = async (account, token) => {
    return api
      .fetch("dealership/passwords/reset", {
        account,
        token,
      })
      .then((res) => {
        return res;
      });
  };
  const forgot = async (email) => {
    return api
      .fetch("dealership/passwords/forgot", {
        email,
      })
      .then((res) => {
        return res;
      });
  };
  const logout = async () => {
    if (process.client) localStorage.removeItem("sg_token");
    return true;
  };
  return {
    signUp,
    signIn,
    reset,
    forgot,
    logout,
  };
}
