import returnFetch from "return-fetch";

export const fetch = returnFetch({
  baseUrl: "http://localhost:3000",
  interceptors: {
    request: async ([url, config]) => {
      config = config || {};
      config.headers = {
        ...config.headers,
        Authorization: localStorage.getItem("token") ?? "",
      };
      return [url, config];
    },
  },
});
