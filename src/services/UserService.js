import axios from "axios";
const API_ENDPOINT = 'http://localhost:9000';

export default {
    fetchAll: function () {
        return axios.get(`${API_ENDPOINT}/collaborateurs`)
            .then(res => res.data)
            .catch(res => {
                let errMessage = (res.response) ? `${res.response.statusText} : ${res.response.data.message}` : `${res.response.statusText} : ${res.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            });
    },

    addUser: function (userObj) {
        return axios.post(`${API_ENDPOINT}/collaborateur`, userObj)
            .then(res => res.data)
            .catch(res => {
                let errMessage = (res.response) ? `${res.response.statusText} : ${res.response.data.message}` : `${res.response.statusText} : ${res.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            });
    },
    removeUser: function (userObj) {
        return axios.delete(`${API_ENDPOINT}/collaborateur/${userObj.id}`)
            .then(res => res.data)
            .catch(res => {
                let errMessage = (res.response) ? `${res.response.statusText} : ${res.response.data.message}` : `${res.response.statusText} : ${res.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            });
    },
    fetchOne: function (id) {
        return axios.get(`${API_ENDPOINT}/collaborateur/${id}`)
            .then(res => res.data)
            .catch(res => {
                let errMessage = (res.response) ? `${res.response.statusText} : ${res.response.data.message}` : `${res.response.statusText} : ${res.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            });
    },
    updateUser: function(user){
        return axios.put(`${API_ENDPOINT}/collaborateur/${user.id}`, user)
        .catch(res => {
            let errMessage = (res.response) ? `${res.response.statusText} : ${res.response.data.message}` : `${res.response.statusText} : ${res.response.data.message}`;
                return Promise.reject(new Error(errMessage));
        });
    }

}