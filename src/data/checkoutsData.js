const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((r) => r.json());
};


export const removeCheckout = async (checkoutId) => {
    return fetch(`${_apiUrl}/${checkoutId}/remove`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const createCheckout = (checkout) => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkout),
    }).then((res) => res.json());
  };