import axiosClient from "./axiosClient";
const questionsApi = {
    getAll: (params) => {
        const url = '/qa-posts';
        return axiosClient.get(url,{params});
    },

   

}

export default questionsApi;