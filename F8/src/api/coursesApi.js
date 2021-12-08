import axiosClient from "./axiosClient";
const coursesApi = {
    getAll: (params) => {
        const url = '/courses/featured';
        return axiosClient.get(url,{params});
    },

    getByCourse: (name) => {
        const url = `/courses/${name}` ;
        return axiosClient.get(url)
    },

}

export default coursesApi;