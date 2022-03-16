import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 6000
})

type Method = 'get' | 'post'; // ts 元组
export const request = (
    method: Method,
    url: string,
    data?: any
) => {
    if(method === 'post') {
        return axiosInstance.post(url,data);
    } else {
        return axiosInstance.post(url, {
            params: data
        })
    }
}