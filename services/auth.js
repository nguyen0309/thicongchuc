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

  const changePassword = async (old_password, new_password) => {
    return api
      .fetch("user/change-password", {
        old_password,
        new_password,
      })
      .then((res) => {
        return res;
      });
  };
  const logout = async () => {
    if (process.client) localStorage.removeItem("congchuc24h_token");
    return true;
  };
  return {
    signUp,
    signIn,
    changePassword,
    logout,
  };
}
