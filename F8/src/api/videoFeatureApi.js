import axiosClient from "./axiosClient";
const videoFeatureApi = {
    getAllHotVideo: () => {
        const url = '/videos/featured';
        return axiosClient.get(url,);
    },
}

export default videoFeatureApi;