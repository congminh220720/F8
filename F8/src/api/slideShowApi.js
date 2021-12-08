import axiosClient from "./axiosClient";
const slideShowApi = {
    getAllSlideShow: () => {
        const url = 'banners?placement=home&type=slideshow';
        return axiosClient.get(url);
    },
}
export default slideShowApi;