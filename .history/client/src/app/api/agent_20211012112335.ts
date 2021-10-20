import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://localhost:5000/api";

const responsBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responsBody),
    post: <T> (url: string, body: {}) => axios.post(url, body).then(responsBody),
    put: <T> (url: string, body: {}) => axios.put(url, body).then(responsBody),
    del: <T> (url: string) => axios.delete(url).then(responsBody),
}   

const Activities = {
    list: () =>  requests.get('/activities')
}

const agent = {
    Activities
}

export default agent;