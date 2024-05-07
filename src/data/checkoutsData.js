const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const returnCheckout = (id) => {
    return fetch(`${_apiUrl}/${id}/returned`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
  
    })}