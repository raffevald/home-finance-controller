import api from "../../services/api/api";
export const fechUsersLogin = (user: string, object: object) => {
    api
        .post(`/api/login${user}`, object)
        .then((response) => {
        // setIsLogin(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
    });
};
