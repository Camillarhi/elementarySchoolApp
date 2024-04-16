import axios from "axios";

export const API_ROOT = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
    baseURL: API_ROOT,
});
const responseBody = (res) => res.body;

const requests = {
    delete: (url) =>
        instance
            .delete(`${API_ROOT}${url}`, {
            })
            .then((responseBody) => {
                return responseBody;
            }),
    get: (url) =>
        instance
            .get(`${API_ROOT}${url}`, {
            })
            .then((responseBody) => {
                console.log("response body", responseBody);
                return responseBody;
            }),
    put: (url, body) =>
        instance
            .put(`${API_ROOT}${url}`, body)
            .then(responseBody),

    post: (url, body) => {
        return instance
            .post(`${API_ROOT}${url}`, body, {
            })
            .then((responseBody) => {
                return responseBody;
            });
    },
};

const User = {
    load: () => requests.get("user")
};

const Subject = {
    load: () => requests.get("subjects"),
    getOne: (id) => requests.get(`subjects/${id}`)
};

export default {
    Subject,
    User
};
