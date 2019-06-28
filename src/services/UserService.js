import axios from "axios";
const API_ENDPOINT = 'http://localhost:9000';

export default {
    fetchAll: function () {
        return axios.get(`${API_ENDPOINT}/collaborateurs`)
            .then(res => res.data);
    },

    addUser: function (userObj) {
        return axios.post(`${API_ENDPOINT}/collaborateur`, userObj)
            .then(res => res.data);
    },
    removeUser: function (userObj) {
                return axios.delete(`${API_ENDPOINT}/collaborateur/${userObj.id}`)
                    .then(res => res.data);
             }
}