import axiosClient from "./axiosClient";
const codeApi = {
    getAll: () => {
        const url = '/use-case-posts';
        return axiosClient.get(url);
    },

    getCodeWithPage: (id) => {
        const url = `/use-case-posts?page=${id.page}` ;
        return axiosClient.get(url)
    },

}

export default codeApi;