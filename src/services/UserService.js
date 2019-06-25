import axios from "axios";
const API_ENDPOINT = 'http://localhost:9000';

export default {
    fetchAll : function() 
    {
        return axios.get(`${API_ENDPOINT}/collaborateurs`)
            .then(res => res.data);
    }
}