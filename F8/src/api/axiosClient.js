
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params), // paramsSerializer??
});

axiosClient.interceptors.request.use(async (config) => {  // interceptors.request.use ??
    //handle token here
    return config;
})

axiosClient.interceptors.response.use((response) => {  // interceptors.response.use ??
    if(response && response.data){
        return response.data;
    }
    
    return response;
},(error) => {
    // Handle errors
    throw error
});
   
export default axiosClient;