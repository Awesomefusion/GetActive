import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

axios.defaults.baseURL = "http://localhost:5000/api";

const responsBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responsBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responsBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responsBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responsBody),
}

const Activities = {
    list: () =>  requests.get<Activity[]>('/activities')
}

const agent = {
    Activities
}

export default agent;