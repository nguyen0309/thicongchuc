import config from "@/config";

class ApiServer {
  async fetch(cmd, args = {}, method = "", media) {
    if (!method) method = Object.keys(args).length === 0 ? "GET" : "POST";
    let url = config.beUrl + "/" + cmd;
    if (Object.keys(args).length && method === "GET") {
      url += "?" + new URLSearchParams(args).toString();
    }
    let token = "";
    if (process.client) token = localStorage.getItem("congchuc24h_token");
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    if (token) {
      headers = {
        authorization: "Bearer " + token,
      };
    }
    if(media) {
      delete headers["Content-Type"]
      delete headers.Accept
    }
    const options =
      method === "GET"
        ? { headers }
        : {
            method,
            headers,
            body: media ? args : JSON.stringify(args),
          };
    return fetch(url, options).then((res) => res.json());
  }
}

export const api = new ApiServer();
