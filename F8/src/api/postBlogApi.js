import axiosClient from "./axiosClient";

const postBlogApi = {
    getPost: (params) => {
        const url = '/blog-posts';
        return axiosClient.get(url,{params});
    },
}
export default postBlogApi;