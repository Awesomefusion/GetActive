import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://localhost:5000/api";

const responsBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <TI (url: string) => axios.get(url).then(responsBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responsBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responsBody),
    del: (url: string) => axios.delete(url).then(responsBody),
}

const Activities = {
    list: () =>  requests.get('/activities')
}

const agent = {
    Activities
}

export default agent;