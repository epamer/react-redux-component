import { makeAsyncRequest } from "../helpers";

const api = {
    fetch: () => makeAsyncRequest("/categories"),

    // NOTE: we can omit specifying headers "ContentType:application/json" with POST, PUT,
    // PATCH, DELETE because the makeAsyncRequest adding them by default.
    updateItem: (id, value) => {
        const url = "/categories/" + id;
        const requestConfig = {
            method: "PATCH",
            body: JSON.stringify(value)
        };

        return makeAsyncRequest(url, requestConfig);
    },

    updateAll: value => {
        const requestConfig = {
            method: "PATCH",
            body: JSON.stringify(value)
        };

        return makeAsyncRequest("/categories/all", requestConfig);
    }
};

export default api;
