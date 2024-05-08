const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const updatePatron = async (id, patron) => {
    return fetch(`${_apiUrl}/${id}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patron),
    }).then((res) => res.json())
};

export const deactivatePatron = async (patronId) => {
    return fetch(`${_apiUrl}/${patronId}/deactivate`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patronId),
    }).then((res) => res.json())
};




