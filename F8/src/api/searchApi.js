import axiosClient from './axiosClient';

const searchApi = {
    searchData:(data) => {
        const url = `/search?q=${data}`;
        return axiosClient.get(url);
    }
}

export default searchApi;