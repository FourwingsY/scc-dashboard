import returnFetch from "return-fetch";

export const fetch = returnFetch({
  baseUrl: typeof window === "undefined" ? "" : location.origin,
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
