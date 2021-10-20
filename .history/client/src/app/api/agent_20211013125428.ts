import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.error(error);
        return await Promise.reject(error);
    }
})

const responsBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responsBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responsBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responsBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responsBody),
}

const Activities = {
    list: () =>  requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post('/activities', activity),
    update: (activity: Activity) => axios.put(`activities/${activity.id, }`)
}

const agent = {
    Activities
}

export default agent;