export const HttpRequest = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    try {
      const res = await fetch(endpoint, options);
      return await (res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status,
            statusText: res.statusText,
          }));
    } catch (err) {
      return err;
    }
  };

  const get = (url, options = {}) => {
    return customFetch(url, options);
  };

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
